import { ButtonBlock } from "@/components/ui/ButtonBlock";
import { LiBlock2 } from "@/components/ui/LiBlock2";

const liBlock2s = [
  { href: "/about", image: "/images/af0e063715aaeb30c3dd198a2875e22ff8356636-4508e0.jpg", text: "About" },
  { href: "/newsroom", image: "/images/7d16904e7f8e88ebce4039c6f38bc4370456188b-4508e0.jpg", text: "Newsroom" },
  { href: "/partnerships", image: "/images/696e2847e46fb8fbe7e6e9c560d4ae97c76e82e1-4508e0.jpg", text: "Partnerships" },
  { href: "/media-assets", image: "/images/e3ecd6e55ee5d2e13b38fd1219a8385244f8ea87-4508e0.jpg", text: "Media Assets" },
];

/** Nav2 */
export function Nav2() {
  return (
    <nav className="_menu" data-variant="overlay" data-expanded="false">
      <div className="shade fixed inset-0 background-black opacity-0" inert />
      <div id="v-1" className="menu-overlay" inert>
        <div className="background absolute inset-0 background-orange ~t" />
        <main className="h-full overflow-hidden ~t">
          <div className="main-slot h-full ~t">
            <div className="ctas flex">
              <div className="_dropdown _language-select" aria-expanded="false" aria-controls="v-2" role="button" data-v-8fed66cb="">
                <ButtonBlock />
                <div id="v-2" className="overlay-container absolute mt-10">
                  <div className="overlay" data-lenis-prevent="" />
                  <div className="overlay-fade absolute inset-0" inert />
                </div>
              </div>
              <span className="contents">
                <a href="/personal/register" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="outline">
                  <div data-button-background="" />
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
              </span>
              <span className="contents">
                <a href="/personal/login" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="primary">
                  <div data-button-background="" />
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
              </span>
            </div>
            <ul className="list-container scroll relative" data-lenis-prevent="">
              <li className="relative">
                <a aria-current="page" href="/" className="-active -exact menu-link">
                  <div className="page-thumbnail">
                    <div className="_menu-page-thumbnail" data-size="small">
                      <img src="/images/4f6a8508b00df69a179304578d93ed614d258563-4508e0.png" width="96" height="96" alt="Menu Thumbanil Image" data-media="image" className="absolute inset-0 object-cover" />
                    </div>
                  </div>
                  <div className="label">
                    <div className="flex items-center ~t">
                      <span>
                        Homepage
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="relative">
                <div className="divider absolute top-0 opacity-10" />
                <div className="overflow-hidden body -book opacity-50 mb-8">
                  Personal
                </div>
                <ul>
                  <LiBlock2 href="/jeton-card" image="/images/2bc9ed5b8d4817448a406893182553c525f5b8ef-4508e0.jpg" text="Jeton Card" />
                  <LiBlock2 href="/fees" image="/images/6f85636fb47a919c3b5a09e01174167f1d909443-4508e0.jpg" text="Fees" />
                </ul>
              </li>
              <li className="relative">
                <div className="divider absolute top-0 opacity-10" />
                <div className="overflow-hidden body -book opacity-50 mb-8">
                  Business
                </div>
                <ul>
                  <LiBlock2 href="/business" image="/images/menu-thumbnail.webp" text="Business Banking" />
                  <LiBlock2 href="/business/growth-network" image="/images/menu-thumbnail.webp" text="Growth Network" />
                </ul>
              </li>
              <li className="relative">
                <div className="divider absolute top-0 opacity-10" />
                <div className="overflow-hidden body -book opacity-50 mb-8">
                  Company
                </div>
                <ul>
                  {liBlock2s.map((item) => (
                    <LiBlock2 key={item.href} {...item} />
                  ))}
                </ul>
              </li>
            </ul>
            <div className="scroll-fade" />
          </div>
        </main>
      </div>
      <button className="menu-bar" aria-expanded="false" aria-controls="v-1">
        <span className="_menu-button body-small -book" data-active="false" tabIndex={-1}>
          <div className="background absolute inset-0" />
          <span className="_text-transition">
            <div>
              <span data-split-text="" data-clip="words">
                <span className="w">
                  Menu
                </span>
              </span>
            </div>
            <div>
              <span data-split-text="" data-clip="words">
                <span className="w">
                  Menu
                </span>
              </span>
            </div>
          </span>
          <span className="_icon shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 9L4 9" data-mode="stroke" style={{ transformOrigin: "12px 12px" }} strokeWidth="1.5" strokeLinecap="square" />
              <path d="M20 15L4 15" data-mode="stroke" style={{ transformOrigin: "12px 12px" }} strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </span>
        </span>
      </button>
    </nav>
  );
}
