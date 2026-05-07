import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | RÖLTEK TRADING PLC",
  description: "Meet RÖLTEK's expert leadership with deep understanding of Ethiopian automotive market dynamics.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
