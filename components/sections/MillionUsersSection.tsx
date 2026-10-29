import { DivBlock } from "@/components/ui/DivBlock";

/** 1MillionUsersSection */
export function MillionUsersSection() {
  return (
    <section className="_extra-bold-hero grid-stack">
      <div className="flex flex-col items-center text-center py-216-140 color-white background-orange">
        <h2 className="title-1 -medium w-cols-12 sm-w-cols-14 xs-w-cols-16">
          1 million users, plus you.
        </h2>
        <p className="subhead-2 -medium w-cols-10 xs-w-cols-12 mt-64-24">
          It only takes few seconds to get started.
        </p>
        <DivBlock className="flex gap-24 mt-64-48" href="https://apps.apple.com/us/app/jeton/id6499320378" image="/images/app-store-neutralC8AzagM1.svg" href2="https://play.google.com/store/apps/details?id=com.jeton.app" image2="/images/google-play-neutralDanFxK_A.svg" />
      </div>
      <span />
    </section>
  );
}
