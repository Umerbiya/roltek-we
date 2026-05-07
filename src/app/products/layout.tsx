import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVECO Spare Parts Catalog | RÖLTEK TRADING PLC",
  description: "Comprehensive IVECO parts inventory: engine components, transmission, braking systems, electrical, and more. Parts for vehicles from 1950s to present.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
