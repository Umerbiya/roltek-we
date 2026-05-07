import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission & Vision | RÖLTEK TRADING PLC",
  description: "RÖLTEK's commitment to being Ethiopia's leading supplier of Italian heavy and light goods vehicle spare parts.",
};

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
