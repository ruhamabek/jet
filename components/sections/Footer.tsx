import type { CSSProperties } from "react";
import { ButtonBlock } from "@/components/ui/ButtonBlock";
import { DivBlock2 } from "@/components/ui/DivBlock2";

/** Footer */
export function Footer() {
  return (
    <footer className="_footer g-row-full color-orange -book">
      <ul className="links mt-80-32 g-row-full body color-orange">
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false" aria-controls="v-8">
              <DivBlock2 text="Get Started" />
            </button>
            <div id="v-8" className="accordion-content">
              <ul>
                <li>
                  <a href="/personal/register" className="footer-link">
                    Sign up
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/personal/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false" aria-controls="v-9">
              <DivBlock2 text="Discover" />
            </button>
            <div id="v-9" className="accordion-content">
              <ul>
                <li>
                  <a href="/jeton-card" className="footer-link">
                    Jeton Card
                  </a>
                </li>
                <li>
                  <a href="/fees" className="footer-link">
                    Fees
                  </a>
                </li>
                <li>
                  <a href="/business" className="footer-link">
                    Business
                  </a>
                </li>
                <li>
                  <a href="/business/growth-network" className="footer-link">
                    Growth Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false" aria-controls="v-10">
              <DivBlock2 text="Company" />
            </button>
            <div id="v-10" className="accordion-content">
              <ul>
                <li>
                  <a href="/about" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/newsroom" className="footer-link">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="/partnerships" className="footer-link">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a href="/media-assets" className="footer-link">
                    Media Assets
                  </a>
                </li>
                <li>
                  <a href="/promotions" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="https://www.jeton.us/" target="_blank" className="footer-link">
                    Jeton USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false" aria-controls="v-11">
              <DivBlock2 text="Legal" />
            </button>
            <div id="v-11" className="accordion-content">
              <ul>
                <li>
                  <a href="/cookie-policy" className="footer-link">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="footer-link">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/aml-policy" className="footer-link">
                    AML Policy
                  </a>
                </li>
                <li>
                  <a href="/complaints-handling-policy-page" className="footer-link">
                    Complaints Handling Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false" aria-controls="v-12">
              <DivBlock2 text="Help" />
            </button>
            <div id="v-12" className="accordion-content">
              <ul>
                <li>
                  <a href="https://developer.jeton.com/" target="_blank" className="footer-link">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="/support" className="footer-link">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <div className="externals mt-80-32 g-row-full flex flex-wrap gap-24 justify-between items-center">
        <div className="flex gap-24">
          <a href="https://play.google.com/store/apps/details?id=com.jeton.app" target="_blank" className="_app-button" data-button="" data-tone="orange" data-variant="outline" aria-label="go to mobile app">
            <div data-button-background="" />
            <div className="outline absolute inset-0" />
            <img className="absolute inset-0" src="/images/google-play-orangeDdjjEOt1.svg" alt="App marketplace icon" />
          </a>
          <a href="https://apps.apple.com/us/app/jeton/id6499320378" target="_blank" className="_app-button" data-button="" data-tone="orange" data-variant="outline" aria-label="go to mobile app">
            <div data-button-background="" />
            <div className="outline absolute inset-0" />
            <img className="absolute inset-0" src="/images/app-store-orangeDy1lc44Z.svg" alt="App marketplace icon" />
          </a>
        </div>
        <ul className="certifications relative flex justify-center gap-32-16">
          <li className="grid place-center">
            <img src="/images/1151125d455608ae69070fdd56e5a71365f3e17e-75c25c.png" width="102" height="128" alt="UKAS Management Systems badge" />
          </li>
          <li className="grid place-center">
            <img src="/images/091df0f4e5a50b54d7c480f4c4316e7cbb874404-73a3d3.png" width="117" height="128" alt="Cyber Essentials Certified badge" />
          </li>
          <li className="grid place-center">
            <img src="/images/1131d43c022f9f24598b699500ad3d2f0880c5ee-a490de.png" width="128" height="128" alt="ISO 27001 Certified badge" />
          </li>
          <li className="grid place-center">
            <img src="/images/3ce8e871cd751b791d212f21d8313855c7485df7-b00c37.png" width="491" height="128" alt="EBA Associate Member/ EBA Standard Ecosystem Partner of the Euro Banking Association" />
          </li>
          <li className="grid place-center">
            <img src="/images/8ce6366b851312add1e09a4a75e4e64281c89831-451dc9.png" width="591" height="128" alt="FT 1000 Europe's fastest growing companies 2024 & 2025 badge" />
          </li>
          <li className="grid place-center">
            <img src="/images/3915572478f3f7ea3275c443d4489c8a4439dcc0-5f3ede.png" width="105" height="128" alt="Cyber Essentials Certified Plus badge" />
          </li>
        </ul>
        <div className="socials flex">
          <a href="https://www.instagram.com/jetonpayments" target="_blank" className="_circle-button" icon="instagram" as="Hyperlink" aria-label="instagram">
            <div className="bg absolute inset-0" />
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4954 3H7.50458C5.0207 3 3 5.02129 3 7.50591V15.7336C3 18.2182 5.0207 20.2395 7.50458 20.2395H16.4954C18.9793 20.2395 21 18.2182 21 15.7336V7.50591C21 5.02129 18.9793 3 16.4954 3ZM4.58908 7.50591C4.58908 5.89804 5.89718 4.58953 7.50458 4.58953H16.4954C18.1028 4.58953 19.4109 5.89804 19.4109 7.50591V15.7336C19.4109 17.3415 18.1028 18.65 16.4954 18.65H7.50458C5.89718 18.65 4.58908 17.3415 4.58908 15.7336V7.50591Z" data-mode="fill" />
                <path d="M12 15.81C14.3098 15.81 16.19 13.9303 16.19 11.6187C16.19 9.30724 14.3108 7.4275 12 7.4275C9.6892 7.4275 7.81 9.30724 7.81 11.6187C7.81 13.9303 9.6892 15.81 12 15.81ZM12 9.01805C13.4344 9.01805 14.601 10.185 14.601 11.6198C14.601 13.0545 13.4344 14.2215 12 14.2215C10.5657 14.2215 9.39907 13.0545 9.39907 11.6198C9.39907 10.185 10.5657 9.01805 12 9.01805Z" data-mode="fill" />
                <path d="M16.5779 8.10465C17.1999 8.10465 17.7068 7.59858 17.7068 6.97539C17.7068 6.3522 17.2009 5.8461 16.5779 5.8461C15.9549 5.8461 15.449 6.3522 15.449 6.97539C15.449 7.59858 15.9549 8.10465 16.5779 8.10465Z" data-mode="fill" />
              </svg>
            </span>
          </a>
          <a href="https://www.facebook.com/jetonpayments" target="_blank" className="_circle-button" icon="facebook" as="Hyperlink" aria-label="facebook">
            <div className="bg absolute inset-0" />
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.2524 20.9182C17.6294 20.3083 20.9987 16.5494 20.9987 12.0026H21C21 7.03075 16.9704 3 12 3C7.02957 3 3 7.03075 3 12.0026C3 16.4832 6.27284 20.1998 10.5578 20.8899L10.5578 14.8318H8.32104V12.19H10.5578V9.79047C10.5578 8.3018 11.7642 7.09447 13.253 7.09447V7.09573C13.2552 7.09573 13.2573 7.09541 13.2593 7.0951C13.2614 7.09478 13.2634 7.09447 13.2656 7.09447H15.6783V9.37919H14.1018C13.6333 9.37919 13.253 9.75956 13.253 10.2282L13.2524 10.2289V12.19H15.6777L15.2936 14.8318H13.2524L13.2524 20.9182Z" data-mode="fill" />
              </svg>
            </span>
          </a>
          <a href="https://twitter.com/jetonpayments" target="_blank" className="_circle-button" icon="x" as="Hyperlink" aria-label="x">
            <div className="bg absolute inset-0" />
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.04329 4L9.99284 13.2941L3 20.8509H4.57426L10.6971 14.2352L15.6437 20.8509H21L13.6598 11.034L20.1691 4H18.5948L12.9566 10.093L8.40064 4H3.04434H3.04329ZM5.35769 5.15968H7.81781L18.6835 19.6913H16.2234L5.35769 5.15968Z" data-mode="fill" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="divider mt-24-16 g-row-full opacity-10 background-orange" />
      <div className="mt-24-16 g-row-full flex justify-between items-center">
        <div className="_dropdown _language-select" aria-expanded="false" aria-controls="v-13" role="button" data-v-8fed66cb="">
          <ButtonBlock />
          <div id="v-13" className="overlay-container absolute mt-10">
            <div className="overlay" data-lenis-prevent="" />
            <div className="overlay-fade absolute inset-0" inert />
          </div>
        </div>
        <a className="footer-link" href="https://burocratik.com" target="_blank">
          Made by Büro
        </a>
      </div>
      <div className="wordmark relative mt-32 g-row-full">
        <span className="_wordmark" data-tone="orange">
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
      </div>
      <p className="mt-96-32 opacity-50 color-orange caption">
        Jeton Bank Limited is licensed and authorised by the Financial Services Unit, Ministry of Finance of the Commonwealth of Dominica, licensed as a banking institution under the International Banking Act, fully authorised to provide services to clients worldwide, under the prudential supervision of the Financial Services Unit. Jeton Bank Limited is registered in the Commonwealth of Dominica, Company Number 2022/C0175, with its registered address at 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica, Post Code: 00109-8000. Jeton Bank Limited is a member of Swift™, Swift Code: JETODMD2 LEI Code: 894500XGIX3R4HCIOC29.
      </p>
      <div className="mt-32 bottom-cards justify-center" data-count="2">
        <div className="_partnership-card flex br-20-16">
          <img src="/images/192427a2cc27f10f5ff6b5833cb14a52df7d40d7-108b36.png" width="1530" height="840" alt="West ham background" sizes="(max-width: 410px) 100vw, (max-width: 743px) 100vw, (max-width: 1023px) 100vw, 100vw" className="background absolute inset-0 object-cover" />
          <div className="gradient absolute inset-0" style={{"--background-color":"#7a2739"} as CSSProperties} />
          <span className="status absolute body-small -book color-orange-900 background-white px-16 py-6 br-32">
            Past partnership
          </span>
          <img src="/images/3807ed1d6ff033d12f87399f2c553de24b4805a3-0471cf.png" width="664" height="160" alt="West ham badge" sizes="(max-width: 410px) 90vw, (max-width: 743px) 80vw, (max-width: 1023px) 80vw, 80vw" className="badge relative" />
        </div>
        <div className="_partnership-card flex br-20-16">
          <img src="/images/3fa7b37293f885927ddb88107fc1b88df1a4485d-108b36.jpg" width="1022" height="560" alt="Brand Ambassadors background" sizes="(max-width: 410px) 100vw, (max-width: 743px) 100vw, (max-width: 1023px) 100vw, 100vw" className="background absolute inset-0 object-cover" />
          <div className="gradient absolute inset-0" style={{"--background-color":"#f73b20"} as CSSProperties} />
          <img src="/images/8d0ba3c7d77020b2ecf42369f5592f7e0e1a5181-0471cf.png" width="538" height="120" alt="Brand Ambassadors Badge" sizes="(max-width: 410px) 90vw, (max-width: 743px) 80vw, (max-width: 1023px) 80vw, 80vw" className="badge relative" />
        </div>
      </div>
    </footer>
  );
}
