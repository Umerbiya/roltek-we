import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RÖLTEK | 40 Years of IVECO Parts Excellence",
  description: "Learn about RÖLTEK TRADING PLC's four decades of experience providing quality IVECO spare parts to the Ethiopian market.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
