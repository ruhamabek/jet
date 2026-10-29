import type { Metadata } from "next";
import { SiteScripts } from "@/components/site/SiteScripts";
import "./globals.css";
import { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Jeton Bank — Your Digital Financial Partner",
  description: "Secure digital banking for individuals and businesses.",
  icons: { icon: "/images/favicon-64e8aa.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{"--nb-support-cookie-h":"0px"} as CSSProperties} suppressHydrationWarning>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
