import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pravaro.com.au"),
  title: "Pravaro — The Backbone of Continuous NDIS Support",
  description:
    "Pravaro is the unified operating platform connecting NDIS providers, support workers, and staffing agencies — bringing rostering, compliance, workforce coordination, and care management together in one connected ecosystem.",
  openGraph: {
    title: "Pravaro — The Backbone of Continuous NDIS Support",
    description:
      "The unified operating platform for NDIS providers, support workers, and staffing agencies.",
    images: ["/brand/logo.png"],
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
    <html lang="en-AU" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
