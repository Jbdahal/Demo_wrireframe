import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pravaro.com.au"),
  title: "Pravaro — NDIS operations platform",
  description:
    "Pravaro is a software suite built for NDIS providers. It brings together the tools care teams, schedulers, agencies, and administrators need to run day-to-day NDIS operations without the usual admin headaches.",
  openGraph: {
    title: "Pravaro — NDIS operations platform",
    description:
      "A growing suite of software for NDIS providers, starting with the Roster & Scheduling platform, live today.",
    images: ["/brand/logo-wordmark.png"],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${jakarta.variable} ${sourceSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
