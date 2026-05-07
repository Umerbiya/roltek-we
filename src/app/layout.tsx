import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

import { defaultMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = defaultMetadata;

// RÖLTEK JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RÖLTEK TRADING PLC",
  "description": "Wholesaler of IVECO truck and trailer spare parts",
  "url": "https://www.roltek.et",
  "logo": "https://www.roltek.et/images/logo-placeholder.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PEPSI-GOTERA [OPPOSITE]",
    "addressLocality": "Addis Ababa",
    "addressCountry": "Ethiopia"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+251-91-187-0000",
    "contactType": "sales"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", inter.variable, outfit.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Placeholder: Add your Google Analytics Tag (GA4) ID below */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        /> */}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-primary">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
