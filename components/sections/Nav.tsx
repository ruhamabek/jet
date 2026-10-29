import { LiBlock } from "@/components/ui/LiBlock";
import { SpanBlock } from "@/components/ui/SpanBlock";

const liBlocks = [
  { href: "/about", text: "About", image: "/images/af0e063715aaeb30c3dd198a2875e22ff8356636-877ab8.jpg" },
  { href: "/newsroom", text: "Newsroom", image: "/images/7d16904e7f8e88ebce4039c6f38bc4370456188b-877ab8.jpg" },
  { href: "/partnerships", text: "Partnerships", image: "/images/696e2847e46fb8fbe7e6e9c560d4ae97c76e82e1-877ab8.jpg" },
  { href: "/media-assets", text: "Media Assets", image: "/images/e3ecd6e55ee5d2e13b38fd1219a8385244f8ea87-877ab8.jpg" },
];

/** Nav */
export function Nav() {
  return (
    <nav className="_menu" data-variant="drawers">
      <ul className="menu-bar gap-2">
        <li>
          <a aria-current="page" href="/" className="-active -exact _menu-button body-small -book" data-active="false" tabIndex={-1} data-action="link">
            <div className="background absolute inset-0" />
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z" data-mode="fill" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z" data-mode="fill" />
              </svg>
            </span>
          </a>
        </li>
        <li>
          <button className="_menu-button body-small -book" data-active="false" tabIndex={-1} data-action="expand" aria-expanded="false" aria-controls="v-0-item[1]">
            <div className="background absolute inset-0" />
            <div>
              Personal
            </div>
            <SpanBlock />
          </button>
          <div id="v-0-item[1]" className="_menu-drawer">
            <div className="slot">
              <ul>
                <LiBlock href="/jeton-card" text="Jeton Card" image="/images/2bc9ed5b8d4817448a406893182553c525f5b8ef-877ab8.jpg" />
                <LiBlock href="/fees" text="Fees" image="/images/6f85636fb47a919c3b5a09e01174167f1d909443-877ab8.jpg" />
              </ul>
              <div className="thumbnail" />
            </div>
          </div>
        </li>
        <li>
          <button className="_menu-button body-small -book" data-active="false" tabIndex={-1} data-action="expand" aria-expanded="false" aria-controls="v-0-item[2]">
            <div className="background absolute inset-0" />
            <div>
              Business
            </div>
            <SpanBlock />
          </button>
          <div id="v-0-item[2]" className="_menu-drawer">
            <div className="slot">
              <ul>
                <LiBlock href="/business" text="Business Banking" image="/images/menu-thumbnail.webp" />
                <LiBlock href="/business/growth-network" text="Growth Network" image="/images/menu-thumbnail.webp" />
              </ul>
              <div className="thumbnail" />
            </div>
          </div>
        </li>
        <li>
          <button className="_menu-button body-small -book" data-active="false" tabIndex={-1} data-action="expand" aria-expanded="false" aria-controls="v-0-item[3]">
            <div className="background absolute inset-0" />
            <div>
              Company
            </div>
            <SpanBlock />
          </button>
          <div id="v-0-item[3]" className="_menu-drawer">
            <div className="slot">
              <ul>
                {liBlocks.map((item) => (
                  <LiBlock key={item.href} {...item} />
                ))}
              </ul>
              <div className="thumbnail" />
            </div>
          </div>
        </li>
      </ul>
      <div className="shade fixed w-full h-full left-0 top-0 opacity-0" inert />
    </nav>
  );
}
