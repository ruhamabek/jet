/** SpanBlock4: used 4 times on the page. */
export function SpanBlock4({ text, text2, text3 }: { text: string; text2: string; text3: string }) {
  return (
    <span className="w">
      <span className="c">
        <span className="f ~t">
          {text}
        </span>
      </span>
      <span className="c">
        <span className="f ~t">
          {text2}
        </span>
      </span>
      <span className="c">
        <span className="f ~t">
          {text3}
        </span>
      </span>
      <span className="c">
        <span className="f ~t" />
      </span>
    </span>
  );
}
