import type { Metadata } from "next";

export const siteMetadata = {
  title: "RÖLTEK TRADING PLC | IVECO Spare Parts Wholesaler Ethiopia",
  description:
    "Leading Ethiopian wholesaler of OEM and aftermarket spare parts for IVECO trucks and trailers. 40+ years of expertise serving the Ethiopian automotive market.",
  keywords:
    "IVECO parts Ethiopia, truck spare parts Addis Ababa, OEM parts wholesaler, aftermarket parts, RÖLTEK trading",
  siteUrl: "https://www.roltek.et",
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s",
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: "RÖLTEK TRADING PLC",
    locale: "en_ET",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "RÖLTEK TRADING PLC - IVECO Parts",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
