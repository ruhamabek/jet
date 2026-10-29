import { DivBlock } from "@/components/ui/DivBlock";

/** AllYourFinancesSection */
export function AllYourFinancesSection() {
  return (
    <section className="_mobile-app-hero flex flex-col">
      <div className="background absolute inset-0">
        <video className="_video-asset h-full w-full object-cover" width="2880" height="2160" loop muted playsInline preload="metadata" data-media="video" />
      </div>
      <div className="g-row relative color-white">
        <div className="g-col xxl-7 md-9 xs-16 flex flex-col gap-32-24">
          <h2 className="title-3 -medium">
            All your finances, in one app.
          </h2>
          <p className="subhead-2 -medium">
            {"Join 1M+ happy users today. "}
          </p>
          <div className="ctas flex gap-24">
            <span className="contents">
              <a href="/personal/register" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="primary">
                <div data-button-background="" />
                <span className="label relative body -book">
                  <span data-split-text="" className="whitespace-nowrap">
                    <span className="c">
                      G
                    </span>
                    <span className="c">
                      e
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c -space" />
                    <span className="c">
                      S
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c">
                      a
                    </span>
                    <span className="c">
                      r
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c">
                      e
                    </span>
                    <span className="c">
                      d
                    </span>
                  </span>
                  <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true">
                    <span className="c">
                      G
                    </span>
                    <span className="c">
                      e
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c -space" />
                    <span className="c">
                      S
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c">
                      a
                    </span>
                    <span className="c">
                      r
                    </span>
                    <span className="c">
                      t
                    </span>
                    <span className="c">
                      e
                    </span>
                    <span className="c">
                      d
                    </span>
                  </span>
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <DivBlock className="g-row-full flex gap-24" href="https://play.google.com/store/apps/details?id=com.jeton.app" image="/images/google-play-neutralDanFxK_A.svg" href2="https://apps.apple.com/us/app/jeton/id6499320378" image2="/images/app-store-neutralC8AzagM1.svg" />
    </section>
  );
}
