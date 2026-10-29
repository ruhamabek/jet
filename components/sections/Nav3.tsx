import { ButtonBlock } from "@/components/ui/ButtonBlock";
import { SpanBlock2 } from "@/components/ui/SpanBlock2";
import { SpanBlock3 } from "@/components/ui/SpanBlock3";

/** Nav3 */
export function Nav3() {
  return (
    <nav className="_navbar">
      <div className="g-row-full flex items-center justify-between">
        <a aria-current="page" href="/" className="-active -exact homepage-link relative overflow-hidden" aria-label="Homepage">
          <span className="_wordmark" data-tone="neutral">
            <div className="glyphs absolute inset-0">
              <div className="glyph">
                <svg width="230" height="415" viewBox="0 0 230 415" xmlns="http://www.w3.org/2000/svg">
                  <path d="M117.963 329.079H0.951172V408.049H130.336C140.174 408.293 149.958 406.528 159.09 402.862C168.222 399.196 176.51 393.706 183.448 386.728C190.467 379.688 195.978 371.291 199.644 362.05C203.309 352.81 205.053 342.919 204.769 332.981V0H122.722V324.32C122.722 325.582 122.22 326.792 121.328 327.685C120.435 328.577 119.225 329.079 117.963 329.079Z" />
                </svg>
              </div>
              <div className="glyph">
                <svg width="359" height="415" viewBox="0 0 359 415" xmlns="http://www.w3.org/2000/svg">
                  <path d="M266.473 98.8964C242.531 85.2262 215.39 78.1536 187.821 78.4004C165.902 78.1669 144.158 82.3118 123.863 90.592C103.567 98.8723 85.1291 111.121 69.6296 126.621C54.1302 142.12 41.8812 160.558 33.601 180.854C25.3207 201.149 21.1758 222.893 21.4093 244.812C21.0118 274.508 28.4997 303.778 43.1089 329.636C57.7181 355.493 78.9256 377.012 104.567 391.996C130.205 406.923 159.393 414.661 189.058 414.396C222.213 414.396 251.879 408.05 277.261 395.93C302.643 383.81 321.68 366.138 333.704 344.056L335.164 341.391L272.724 303.793L271.137 306.681C263.721 319.367 252.545 329.434 239.156 335.489C223.959 342.879 207.257 346.647 190.359 346.499C165.802 346.499 145.02 339.36 128.617 325.241C113.039 311.821 102.854 293.228 98.2854 269.94H340.018L340.526 267.37C342.492 255.844 343.373 244.16 343.159 232.47C343.519 205.368 336.588 178.669 323.092 155.164C309.595 131.66 290.029 112.215 266.442 98.8647L266.473 98.8964ZM130.806 160.575C146.103 149.129 164.821 143.191 183.918 143.728C203.103 143.192 221.874 149.363 236.998 161.178C250.153 171.506 259.477 185.934 263.491 202.17H102.061C107.161 185.69 117.194 171.172 130.806 160.575V160.575Z" />
                </svg>
              </div>
              <div className="glyph">
                <svg width="286" height="415" viewBox="0 0 286 415" xmlns="http://www.w3.org/2000/svg">
                  <path d="M160.342 0H81.4674V84.8714H14.8394V159.875H81.4674V332.886C81.1904 342.858 82.9718 352.78 86.7002 362.033C90.4286 371.286 96.0241 379.671 103.137 386.665C110.144 393.634 118.484 399.119 127.659 402.794C136.833 406.468 146.654 408.255 156.535 408.049H268.629V332.95H165.101C163.839 332.95 162.629 332.448 161.736 331.556C160.844 330.663 160.342 329.453 160.342 328.19V159.875H268.629V84.8714H160.342V0Z" />
                </svg>
              </div>
              <div className="glyph">
                <svg width="366" height="415" viewBox="0 0 366 415" xmlns="http://www.w3.org/2000/svg">
                  <path d="M178.61 78.4005C145.352 78.4005 112.84 88.2627 85.187 106.74C57.5338 125.217 35.9809 151.48 23.2536 182.206C10.5262 212.933 7.1961 246.743 13.6844 279.363C20.1728 311.982 36.1882 341.944 59.7053 365.461C83.2224 388.979 113.185 404.994 145.804 411.482C178.423 417.971 212.234 414.641 242.961 401.913C273.687 389.186 299.949 367.633 318.427 339.98C336.904 312.326 346.766 279.815 346.766 246.557C346.766 201.959 329.05 159.188 297.514 127.652C265.979 96.117 223.208 78.4005 178.61 78.4005V78.4005ZM178.61 335.394C161.001 335.426 143.779 330.233 129.123 320.473C114.467 310.713 103.035 296.825 96.2752 280.566C89.515 264.307 87.7298 246.407 91.1458 229.133C94.5618 211.859 103.025 195.987 115.465 183.525C127.905 171.063 143.763 162.571 161.03 159.124C178.298 155.677 196.201 157.43 212.472 164.162C228.743 170.893 242.652 182.3 252.438 196.938C262.224 211.577 267.447 228.79 267.447 246.398C267.456 269.979 258.105 292.6 241.448 309.292C224.792 325.985 202.191 335.384 178.61 335.426V335.394Z" />
                </svg>
              </div>
              <div className="glyph">
                <svg width="318" height="415" viewBox="0 0 318 415" xmlns="http://www.w3.org/2000/svg">
                  <path d="M296.298 106.192C289.258 99.173 280.861 93.6625 271.62 89.9967C262.38 86.331 252.489 84.587 242.551 84.871H24.3287V408.049H102.569V164.634C102.569 163.372 103.071 162.161 103.963 161.269C104.856 160.376 106.066 159.875 107.328 159.875H233.985C235.247 159.875 236.458 160.376 237.35 161.269C238.243 162.161 238.744 163.372 238.744 164.634V408.049H317.619V159.938C317.903 150.001 316.159 140.11 312.493 130.87C308.827 121.629 303.317 113.232 296.298 106.192V106.192Z" />
                </svg>
              </div>
            </div>
            <svg className="spacer" width="1558" height="415" aria-hidden="true" />
          </span>
        </a>
        <div className="lang-cta-wrapper flex items-center gap-12">
          <div className="_dropdown _language-select" aria-expanded="false" aria-controls="v-3" role="button" data-v-8fed66cb="">
            <ButtonBlock />
            <div id="v-3" className="overlay-container absolute mt-10">
              <div className="overlay" data-lenis-prevent="" />
              <div className="overlay-fade absolute inset-0" inert />
            </div>
          </div>
          <div className="nav-auth flex" data-v-e45d3bd4="">
            <div className="_dropdown _nav-auth-dropdown" aria-expanded="false" aria-controls="v-4" role="button" data-v-e45d3bd4="">
              <a className="_button no-tap-highlight nav-auth-trigger" data-button="" data-label="true" data-tone="neutral" data-variant="outline" href="/personal/register" data-v-e45d3bd4="">
                <div data-button-background="" />
                <SpanBlock2 className="_icon" />
                <span className="label relative body -book">
                  <span data-split-text="" className="whitespace-nowrap">
                    <span className="c">
                      S
                    </span>
                    <span className="c">
                      i
                    </span>
                    <span className="c">
                      g
                    </span>
                    <span className="c">
                      n
                    </span>
                    <span className="c -space" />
                    <span className="c">
                      u
                    </span>
                    <span className="c">
                      p
                    </span>
                  </span>
                  <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true">
                    <span className="c">
                      S
                    </span>
                    <span className="c">
                      i
                    </span>
                    <span className="c">
                      g
                    </span>
                    <span className="c">
                      n
                    </span>
                    <span className="c -space" />
                    <span className="c">
                      u
                    </span>
                    <span className="c">
                      p
                    </span>
                  </span>
                </span>
              </a>
              <div id="v-4" className="overlay-container absolute mt-10">
                <div className="overlay" data-lenis-prevent="">
                  <div className="nav-auth-panel" data-v-e45d3bd4="">
                    <p className="nav-auth-cap caption -medium uppercase" data-v-e45d3bd4="">
                      Open an account
                    </p>
                    <div className="dropdown-overlay-list" data-v-e45d3bd4="">
                      <a href="/personal/register" className="nav-auth-item -personal" data-v-e45d3bd4="">
                        <span className="nav-auth-item-bg absolute inset-0" data-v-e45d3bd4="" />
                        <img className="nav-auth-art" src="/images/personal-virtual.svg" alt="" data-v-e45d3bd4="" />
                        <SpanBlock3 text="Jeton Individual" text2="For you and your money" />
                        <span className="_icon nav-auth-go" data-v-e45d3bd4="">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.25 11.25L19.75 11.25L19.75 12.75L3.25 12.75L3.25 11.25Z" data-mode="fill" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9393 19L18.9393 12L11.9393 5L13 3.93934L19.4697 10.409C20.3483 11.2877 20.3483 12.7123 19.4697 13.591L13 20.0607L11.9393 19Z" data-mode="fill" />
                          </svg>
                        </span>
                      </a>
                      <a href="/corporate/register" className="nav-auth-item -corporate" data-v-e45d3bd4="">
                        <span className="nav-auth-item-bg absolute inset-0" data-v-e45d3bd4="" />
                        <img className="nav-auth-art" src="/images/corporate-virtual-64e8aa.svg" alt="" data-v-e45d3bd4="" />
                        <SpanBlock3 text="Jeton Business" text2="For companies and teams" />
                        <span className="_icon nav-auth-go" data-v-e45d3bd4="">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.25 11.25L19.75 11.25L19.75 12.75L3.25 12.75L3.25 11.25Z" data-mode="fill" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9393 19L18.9393 12L11.9393 5L13 3.93934L19.4697 10.409C20.3483 11.2877 20.3483 12.7123 19.4697 13.591L13 20.0607L11.9393 19Z" data-mode="fill" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <p className="nav-auth-note caption" data-v-e45d3bd4="">
                      Takes about 3 minutes — no paperwork
                    </p>
                  </div>
                </div>
                <div className="overlay-fade absolute inset-0" inert />
              </div>
            </div>
            <div className="_dropdown _nav-auth-dropdown" aria-expanded="false" aria-controls="v-5" role="button" data-v-e45d3bd4="">
              <a className="_button no-tap-highlight nav-auth-trigger" data-button="" data-label="true" data-tone="neutral" data-variant="primary" href="/personal/login" data-v-e45d3bd4="">
                <div data-button-background="" />
                <SpanBlock2 className="_icon" />
                <span className="label relative body -book">
                  <span data-split-text="" className="whitespace-nowrap">
                    <span className="c">
                      L
                    </span>
                    <span className="c">
                      o
                    </span>
                    <span className="c">
                      g
                    </span>
                    <span className="c">
                      i
                    </span>
                    <span className="c">
                      n
                    </span>
                  </span>
                  <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true">
                    <span className="c">
                      L
                    </span>
                    <span className="c">
                      o
                    </span>
                    <span className="c">
                      g
                    </span>
                    <span className="c">
                      i
                    </span>
                    <span className="c">
                      n
                    </span>
                  </span>
                </span>
              </a>
              <div id="v-5" className="overlay-container absolute mt-10">
                <div className="overlay" data-lenis-prevent="">
                  <div className="nav-auth-panel" data-v-e45d3bd4="">
                    <p className="nav-auth-cap caption -medium uppercase" data-v-e45d3bd4="">
                      Choose how you bank
                    </p>
                    <div className="dropdown-overlay-list" data-v-e45d3bd4="">
                      <a href="/personal/login" className="-personal nav-auth-item" title="Opens in a separate sign-in window" data-v-e45d3bd4="">
                        <span className="nav-auth-item-bg absolute inset-0" data-v-e45d3bd4="" />
                        <img className="nav-auth-art" src="/images/personal-virtual.svg" alt="" data-v-e45d3bd4="" />
                        <SpanBlock3 text="Jeton Individual" text2="For you and your money" />
                        <span className="_icon nav-auth-go" data-v-e45d3bd4="">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.32798 17.7667L16.9952 6.09943L18.0559 7.16009L6.38864 18.8274L5.32798 17.7667Z" data-mode="fill" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9524 17.1025L16.9524 7.20298H7.05287L7.05287 5.70298L16.2024 5.70298C17.445 5.70298 18.4524 6.71034 18.4524 7.95298L18.4524 17.1025H16.9524Z" data-mode="fill" />
                          </svg>
                        </span>
                      </a>
                      <a href="/corporate/login" className="-corporate nav-auth-item" title="Opens in a separate sign-in window" data-v-e45d3bd4="">
                        <span className="nav-auth-item-bg absolute inset-0" data-v-e45d3bd4="" />
                        <img className="nav-auth-art" src="/images/corporate-virtual-64e8aa.svg" alt="" data-v-e45d3bd4="" />
                        <SpanBlock3 text="Jeton Business" text2="For companies and teams" />
                        <span className="_icon nav-auth-go" data-v-e45d3bd4="">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.32798 17.7667L16.9952 6.09943L18.0559 7.16009L6.38864 18.8274L5.32798 17.7667Z" data-mode="fill" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9524 17.1025L16.9524 7.20298H7.05287L7.05287 5.70298L16.2024 5.70298C17.445 5.70298 18.4524 6.71034 18.4524 7.95298L18.4524 17.1025H16.9524Z" data-mode="fill" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <p className="nav-auth-note caption" data-v-e45d3bd4="">
                      Device verification and a 6-digit PIN on every sign-in
                    </p>
                  </div>
                </div>
                <div className="overlay-fade absolute inset-0" inert />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
