"use client";
import { useEffect } from "react";

type Script = { src: string; module?: boolean };
type Handler = [EventTarget, EventListenerOrEventListenerObject];

// The site's own scripts, in the order the page ran them: its libraries, then the code that animates it.
const SCRIPTS: Script[] = [
  { src: "/vendor/banner.js" },
];

let started = false;

/** Runs the site's scripts once the page is on screen. */
export function SiteScripts() {
  useEffect(() => {
    if (started) return;
    started = true;
    void run();
  }, []);
  return null;
}

// The scripts were written for a page that is still loading: they wait for DOMContentLoaded and load, and some check
// document.readyState. Here the page has loaded already, so while they are added it reads as loading, their ready
// and load handlers are kept, and both run once every script is in, in the order a browser would use.
async function run() {
  const ready: Handler[] = [];
  const loaded: Handler[] = [];
  const add = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (this: EventTarget, type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) {
    if (listener && type === "DOMContentLoaded" && (this === document || this === window)) return void ready.push([this, listener]);
    if (listener && type === "load" && this === window) return void loaded.push([this, listener]);
    return add.call(this, type, listener, options);
  };
  Object.defineProperty(document, "readyState", { configurable: true, get: () => "loading" });
  // All are fetched at once and run one after another, in order, as the browser does for scripts in the page.
  await Promise.all(SCRIPTS.map(load));
  delete (document as { readyState?: DocumentReadyState }).readyState;
  for (const [target, listener] of ready) fire(target, listener, "DOMContentLoaded");
  // "load" means fonts and pictures are in (scroll animations measure the page then).
  await pageLoaded();
  EventTarget.prototype.addEventListener = add;
  for (const [target, listener] of loaded) fire(target, listener, "load");
}

function pageLoaded() {
  const pictures = [...document.images]
    .filter((img) => img.loading !== "lazy" && !img.complete)
    .map((img) => new Promise((resolve) => { img.addEventListener("load", resolve, { once: true }); img.addEventListener("error", resolve, { once: true }); }));
  const timeout = new Promise((resolve) => setTimeout(resolve, 10000));
  return Promise.race([Promise.all([document.fonts.ready, ...pictures]), timeout]);
}

function fire(target: EventTarget, listener: EventListenerOrEventListenerObject, type: string) {
  try {
    const event = new Event(type);
    if (typeof listener === "function") listener.call(target, event);
    else listener.handleEvent(event);
  } catch (error) {
    console.error(error);
  }
}

function load({ src, module }: Script) {
  return new Promise<void>((resolve) => {
    const el = document.createElement("script");
    if (module) el.type = "module";
    el.src = src;
    el.async = false;
    el.onload = el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}
