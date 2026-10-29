import type { CSSProperties } from "react";
import { LiBlock3 } from "@/components/ui/LiBlock3";

const liBlock3s = [
  { text: "02", text2: "Add" },
  { text: "03", text2: "Method" },
  { text: "04", text2: "Review" },
  { text: "05", text2: "Done" },
];

/** JetonWalkthroughSection */
export function JetonWalkthroughSection() {
  return (
    <section className="_jeton-walkthrough w-full background-orange">
      <div className="absolute inset-0 grid place-center overflow-hidden">
        <div className="_video-backdrop" aria-hidden="true">
          <video style={{"--crop":"0.08333333333333333"} as CSSProperties} muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" tabIndex={-1} />
        </div>
        <div className="slides relative grid place-center">
          <video width="1080" height="1080" muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" aria-hidden="true" />
          <video width="1080" height="1080" muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" aria-hidden="true" />
          <video width="1080" height="1080" muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" aria-hidden="true" />
          <video width="1080" height="1080" muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" aria-hidden="true" />
          <video width="1080" height="1080" muted playsInline disablePictureInPicture disableRemotePlayback preload="metadata" aria-hidden="true" />
        </div>
      </div>
      <article data-step="1">
        <div className="heading title-3 xs-title-5 text-center">
          <p>
            All currencies
          </p>
        </div>
        <div className="heading title-3 xs-title-5 text-center">
          <p>
            One App
          </p>
        </div>
        <div className="feature" data-position="left">
          <div className="divider" />
          <p className="title subhead-1 xs-subhead-2 mb-8">
            {"Move your money across Europe "}
          </p>
          <p className="text body">
            Send money anywhere in the EU, effortlessly.
          </p>
        </div>
      </article>
      <article data-step="2">
        <div className="feature" data-position="right">
          <div className="divider" />
          <p className="title subhead-1 xs-subhead-2 mb-8">
            Add or send in a few taps
          </p>
          <p className="text body">
            {"Easily add or send money from your account. "}
          </p>
        </div>
      </article>
      <article data-step="3">
        <div className="feature" data-position="left">
          <div className="divider" />
          <p className="title subhead-1 xs-subhead-2 mb-8">
            50+ payment methods across Europe
          </p>
          <p className="text body">
            {"Jeton is seamlessly connected with more than 25 countries, and 50 payment methods. "}
          </p>
        </div>
      </article>
      <article data-step="4">
        <div className="feature" data-position="right">
          <div className="divider" />
          <p className="title subhead-1 xs-subhead-2 mb-8">
            {"Fast and safe transactions "}
          </p>
          <p className="text body">
            {"Fast and safe transactions at your fingertips. "}
          </p>
        </div>
      </article>
      <article data-step="5">
        <div className="subheading title-5 xs-subhead-1" data-position="left">
          <p className="grow">
            Simple
          </p>
        </div>
        <div className="subheading title-5 xs-subhead-1" data-position="right">
          <p className="grow">
            fast & safe
          </p>
        </div>
        <div className="subheading title-5 xs-subhead-1" data-position="center">
          <p className="grow">
            Simple, fast & safe
          </p>
        </div>
      </article>
      <div className="stepper">
        <ul className="_stepper body-small flex gap-16 color-white">
          <li>
            <button className="shrink-0" data-hitarea="" data-active="true">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--p":"0"} as CSSProperties}>
                    <circle cx="12" cy="12" r="12" />
                    <circle cx="12" cy="12" r="12" />
                  </svg>
                  <span>
                    01
                  </span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">
                    Account
                  </div>
                </div>
              </div>
            </button>
          </li>
          {liBlock3s.map((item) => (
            <LiBlock3 key={item.text} {...item} />
          ))}
        </ul>
      </div>
      <div className="restart">
        <button className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="outline" tabIndex={-1}>
          <div data-button-background="" />
          <span className="_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.28085 20C3.55044 17.6628 1.95516 12.8313 3.71779 8.5957C5.65948 3.92859 10.9411 1.7511 15.5155 3.73214C20.0899 5.71318 22.2241 11.1028 20.2824 15.7699C19.5554 17.5246 18.309 19.0036 16.7175 20" data-mode="stroke" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5 19.9968L16.5 14.5L15 14.5L15 19.2453C15 20.4905 16.0074 21.5 17.25 21.5H22L22 19.9968H16.5Z" data-mode="fill" />
            </svg>
          </span>
          <span className="label relative body -book">
            <span data-split-text="" className="whitespace-nowrap">
              <span className="c">
                R
              </span>
              <span className="c">
                e
              </span>
              <span className="c">
                s
              </span>
              <span className="c">
                t
              </span>
              <span className="c">
                a
              </span>
              <span className="c">
                r
              </span>
              <span className="c">
                t
              </span>
            </span>
            <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true">
              <span className="c">
                R
              </span>
              <span className="c">
                e
              </span>
              <span className="c">
                s
              </span>
              <span className="c">
                t
              </span>
              <span className="c">
                a
              </span>
              <span className="c">
                r
              </span>
              <span className="c">
                t
              </span>
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
