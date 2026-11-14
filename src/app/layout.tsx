import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "GivenX Tech | Engineering Change",
    template: "%s | GivenX Tech",
  },
  description:
    "GivenX Tech is an engineering partner for AI, cloud and data transformation. Senior teams that work inside your business until the change sticks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" id="top" className={`${archivo.variable} antialiased`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-midnight"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
