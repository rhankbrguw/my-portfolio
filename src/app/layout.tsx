import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { URL } from "url";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://raihan-akbar-portfolio.vercel.app"),
  title: "Raihan Akbar Gunawan | Portfolio",
  description:
    "A portfolio for Raihan Akbar Gunawan, a Computer Science student and developer crafting clean, efficient, and user-friendly applications.",
  openGraph: {
    title: "Raihan Akbar Gunawan | Portfolio",
    description: "Computer Science student and developer.",
    url: "https://raihan-portfolio.vercel.app",
    siteName: "Raihan A.G. Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
    ],
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
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
