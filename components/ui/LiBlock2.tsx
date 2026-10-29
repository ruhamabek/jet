/** LiBlock2: used 8 times on the page. */
export function LiBlock2({ href, image, text }: { href: string; image: string; text: string }) {
  return (
    <li>
      <a href={href} className="menu-link">
        <div className="page-thumbnail">
          <div className="_menu-page-thumbnail" data-size="small">
            <img src={image} width="96" height="96" alt="Menu Thumbanil Image" data-media="image" className="absolute inset-0 object-cover" />
          </div>
        </div>
        <div className="label">
          <div className="flex items-center ~t">
            <span>
              {text}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
