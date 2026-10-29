import type { CSSProperties } from "react";

/** LiBlock3: used 4 times on the page. */
export function LiBlock3({ text, text2 }: { text: string; text2: string }) {
  return (
    <li>
      <button className="shrink-0" data-hitarea="" data-active="false">
        <div className="flex items-baseline">
          <div className="index -book flex place-center">
            <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--p":"0"} as CSSProperties}>
              <circle cx="12" cy="12" r="12" />
              <circle cx="12" cy="12" r="12" />
            </svg>
            <span>
              {text}
            </span>
          </div>
          <div className="label -medium">
            <div className="pl-8">
              {text2}
            </div>
          </div>
        </div>
      </button>
    </li>
  );
}
