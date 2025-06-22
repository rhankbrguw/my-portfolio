import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raihan Akbar Gunawan | Portfolio",
  description:
    "A portfolio for Raihan Akbar Gunawan, a Computer Science student and developer crafting clean, efficient, and user-friendly applications.",
  openGraph: {
    title: "Raihan Akbar Gunawan | Portfolio",
    description: "Computer Science student and developer.",
    url: "https://raihan-portfolio.vercel.app",
    siteName: "RAG • Portfolio",
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
      </body>
    </html>
  );
}
