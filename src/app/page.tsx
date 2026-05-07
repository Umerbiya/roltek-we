import { Hero } from "@/components/home/Hero";
import { BrandsCarousel } from "@/components/home/BrandsCarousel";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { SisterCompanies } from "@/components/home/SisterCompanies";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RÖLTEK TRADING PLC | IVECO Spare Parts Wholesaler Ethiopia",
  description: "40+ years of IVECO truck and trailer spare parts expertise in Ethiopia. OEM and aftermarket parts, nationwide availability, trusted quality.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <WhyChooseUs />
      <TrustIndicators />
      <SisterCompanies />
      <ServicesPreview />
    </>
  );
}
