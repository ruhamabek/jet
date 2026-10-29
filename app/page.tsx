import { Nav } from "@/components/sections/Nav";
import { Nav2 } from "@/components/sections/Nav2";
import { Nav3 } from "@/components/sections/Nav3";
import { Header } from "@/components/sections/Header";
import { UnifyYourFinancesSection } from "@/components/sections/UnifyYourFinancesSection";
import { JetonWalkthroughSection } from "@/components/sections/JetonWalkthroughSection";
import { AllYourFinancesSection } from "@/components/sections/AllYourFinancesSection";
import { ContactlessPaymentsSureSection } from "@/components/sections/ContactlessPaymentsSureSection";
import { ConvertFiatCashSection } from "@/components/sections/ConvertFiatCashSection";
import { HearItFromSection } from "@/components/sections/HearItFromSection";
 import { Footer } from "@/components/sections/Footer";
import { MillionUsersSection } from "@/components/sections/MillionUsersSection";

export default function Home() {
  return (
    <>
      <div id="__nuxt">
        <div>
          <div className="nuxt-loading-indicator" style={{"position":"fixed","top":"0","right":"0","left":"0","pointerEvents":"none","width":"auto","height":"3px","opacity":"0","background":"#F73B20","backgroundSize":"0% auto","transform":"scaleX(0%)","transformOrigin":"left","transition":"transform 0.1s, height 0.4s, opacity 0.4s","zIndex":"999999"}} />
          <div className="landing-root">
            <Nav />
            <Nav2 />
            <Nav3 />
            <div className="_page" data-slug="/" data-name="Home">
              <div className="page-slot">
                <Header />
                <main>
                  <UnifyYourFinancesSection />
                  <section />
                  <JetonWalkthroughSection />
                  <AllYourFinancesSection />
                  <ContactlessPaymentsSureSection />
                  <ConvertFiatCashSection />
                  <HearItFromSection />
                 <MillionUsersSection/>
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="teleports" />
    </>
  );
}
