import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "98.css";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { appConfig } from "@/constants/config";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.siteUrl),
  title: "Raihan Akbar Gunawan | rhankbrguw",
  description:
    "A portfolio for Raihan Akbar Gunawan, a Computer Science student and developer crafting clean, efficient, and user-friendly applications.",
  openGraph: {
    title: "Raihan Akbar Gunawan | rhankbrguw",
    description: "Computer Science student and developer.",
    url: appConfig.siteUrl,
    siteName: "rhankbrguw",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} m-0 p-0 overflow-hidden bg-[#000000] text-[#f5f5f5]`}>
        <main className="h-[100dvh] w-full overflow-hidden">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
