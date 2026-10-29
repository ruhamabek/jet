import { DivBlock } from "@/components/ui/DivBlock";
import { SpanBlock4 } from "@/components/ui/SpanBlock4";

/** Header */
export function Header() {
  return (
    <header className="_common-header" data-layout="full">
      <div className="background absolute inset-0 overflow-hidden background-orange">
        <video className="_video-asset h-full w-full object-cover" type="video/mp4" width="3840" height="2160" loop muted playsInline="true" poster="/images/hero-poster.jpg" preload="auto" data-media="video" />
      </div>
      <div className="g-row main-row color-white relative">
        <div className="g-col xxl-8 md-9 sm-12 xs-16 flex flex-col justify-end">
          <h1 className="title-2 -medium">
            <span data-split-text="" data-clip="chars">
              <div className="l">
                <SpanBlock4 text="O" text2="n" text3="e" />
                <SpanBlock4 text="a" text2="p" text3="p" />
                <SpanBlock4 text="f" text2="o" text3="r" />
                <SpanBlock4 text="a" text2="l" text3="l" />
                <span className="w">
                  <span className="c">
                    <span className="f ~t">
                      n
                    </span>
                  </span>
                  <span className="c">
                    <span className="f ~t">
                      e
                    </span>
                  </span>
                  <span className="c">
                    <span className="f ~t">
                      e
                    </span>
                  </span>
                  <span className="c">
                    <span className="f ~t">
                      d
                    </span>
                  </span>
                  <span className="c">
                    <span className="f ~t">
                      s
                    </span>
                  </span>
                </span>
              </div>
            </span>
          </h1>
        </div>
        <div className="g-col xxl-4 xxl-offset-3 md-6 md-offset-1 sm-8 sm-offset-0 xs-16 flex flex-col justify-end mb-12">
          <p className="subhead-2 -medium">
            Single account for all your payments.
          </p>
          <DivBlock className="flex flex-wrap gap-24 mt-32" href="https://apps.apple.com/us/app/jeton/id6499320378" image="/images/app-store-neutralC8AzagM1.svg" href2="https://play.google.com/store/apps/details?id=com.jeton.app" image2="/images/google-play-neutralDanFxK_A.svg" />
        </div>
      </div>
      <button className="_scroll-hint caption absolute">
        <div className="flex items-center">
          <span className="_coin-drop grid-stack" data-tone="neutral">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            Scroll
          </span>
        </div>
      </button>
    </header>
  );
}
