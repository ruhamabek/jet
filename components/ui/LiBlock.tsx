/** LiBlock: used 8 times on the page. */
export function LiBlock({ href, text, image }: { href: string; text: string; image: string }) {
  return (
    <li>
      <a href={href} className="link body -book" tabIndex={-1}>
        <div className="dot" />
        <div className="label flex items-center">
          <span>
            {text}
          </span>
        </div>
      </a>
      <div className="thumbnail -item absolute top-0 right-0 mt-8 mr-8">
        <div className="_menu-page-thumbnail" data-size="large">
          <img src={image} width="200" height="200" alt="Menu Thumbanil Image" data-media="image" className="absolute inset-0 object-cover" />
        </div>
      </div>
    </li>
  );
}
