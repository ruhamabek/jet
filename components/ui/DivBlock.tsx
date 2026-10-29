/** DivBlock: used 3 times on the page. */
export function DivBlock({ className, href, image, href2, image2 }: { className: string; href: string; image: string; href2: string; image2: string }) {
  return (
    <div className={className}>
      <a href={href} target="_blank" className="_app-button" data-button="" data-tone="neutral" data-variant="outline" aria-label="go to mobile app">
        <div data-button-background="" />
        <div className="outline absolute inset-0" />
        <img className="absolute inset-0" src={image} alt="App marketplace icon" />
      </a>
      <a href={href2} target="_blank" className="_app-button" data-button="" data-tone="neutral" data-variant="outline" aria-label="go to mobile app">
        <div data-button-background="" />
        <div className="outline absolute inset-0" />
        <img className="absolute inset-0" src={image2} alt="App marketplace icon" />
      </a>
    </div>
  );
}
