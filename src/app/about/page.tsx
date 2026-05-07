import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { ThreePillars } from "@/components/about/ThreePillars";
import { Competitiveness } from "@/components/about/Competitiveness";
import { ValuePositioning } from "@/components/about/ValuePositioning";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | RÖLTEK TRADING PLC",
  description: "Learn about RÖLTEK TRADING PLC – Ethiopia's leading wholesaler of OEM and aftermarket IVECO truck and trailer spare parts with 40+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <ThreePillars />
      <Competitiveness />
      <ValuePositioning />
      <AboutCTA />
    </>
  );
}
