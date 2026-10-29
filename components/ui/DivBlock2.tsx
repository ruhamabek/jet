/** DivBlock2: used 5 times on the page. */
export function DivBlock2({ text }: { text: string }) {
  return (
    <div className="link-group-header opacity-50 w-full flex items-center justify-between">
      <span>
        {text}
      </span>
      <span className="_icon shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20" data-mode="stroke" strokeWidth="1.5" strokeLinecap="square" style={{ transformOrigin: "12px 12px" }} />
          <path d="M20 12L4 12" data-mode="stroke" strokeWidth="1.5" strokeLinecap="square" style={{ transformOrigin: "12px 12px" }} />
          <path d="M20 12L4 12" data-mode="stroke" strokeWidth="1.5" strokeLinecap="square" style={{ transformOrigin: "12px 12px" }} />
        </svg>
      </span>
    </div>
  );
}
