import type { CSSProperties } from "react";

/** HearItFromSection */
export function HearItFromSection() {
  return (
    <section className="_client-testimonials relative pb-120-64">
      <div className="background absolute inset-0">
        <img src="/images/b7c674ecd0ee69b2eca20443cac6272c550ed396-18c0b5.jpg" width="4000" height="2667" alt="Hear it from our clients" sizes="(max-width: 410px) 105vw, (max-width: 743px) 100vw, (max-width: 1023px) 150vw, (max-width: 1290px) 200vw, 200vw" className="absolute inset-0 object-cover ~t" />
      </div>
      <div className="g-row justify-center text-center color-orange-25">
        <h2 className="g-col xxl-10 md-12 xs-16 title-3 xs-title-4 -medium mt-80 mb-120-64">
          Hear it from our clients
        </h2>
      </div>
      <ul className="cards w-cols-4 lg-w-cols-6 sm-w-cols-8 xs-w-cols-15 mx-auto color-white body -book relative">
        <li>
          <div className="card ~t">
            <p>
              Recommended
            </p>
            <p className="opacity-70">
              {"Very happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available. "}
            </p>
            <div className="flex gap-8 items-center mt-16">
              <span className="_avatar inline-flex place-center br-full" style={{"--color":"#360802","--background-color":"#BCFFBB"} as CSSProperties}>
                <span className="body">
                  VK
                </span>
              </span>
              <span>
                Vamsi K.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="card ~t">
            <p>
              Awesome app very user friendly
            </p>
            <p className="opacity-70">
              {"Would highly recommend Jeton to my friends. "}
            </p>
            <div className="flex gap-8 items-center mt-16">
              <span className="_avatar inline-flex place-center br-full" style={{"--color":"#360802","--background-color":"#BBD2FF"} as CSSProperties}>
                <span className="body">
                  LA
                </span>
              </span>
              <span>
                Leonie A.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="card ~t">
            <p>
              The best payment solution for German customers
            </p>
            <p className="opacity-70">
              I've been a Jeton user for a few years! The support was always great and I'm always able to make my payments to the websites I want with no problem.
            </p>
            <div className="flex gap-8 items-center mt-16">
              <span className="_avatar inline-flex place-center br-full" style={{"--color":"#360802","--background-color":"#F5FFBB"} as CSSProperties}>
                <span className="body">
                  KR
                </span>
              </span>
              <span>
                Karl R.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="card ~t">
            <p>
              Easy and Fast
            </p>
            <p className="opacity-70">
              {"Great app for fast and easy transfers. I have been using Jeton for a while now without any problem. I have recently started using their Jeton Card for my everyday purchases too. "}
            </p>
            <div className="flex gap-8 items-center mt-16">
              <span className="_avatar inline-flex place-center br-full" style={{"--color":"#360802","--background-color":"#FFBBF0"} as CSSProperties}>
                <span className="body">
                  DP
                </span>
              </span>
              <span>
                Dennis P.
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
