import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RÖLTEK | Get IVECO Parts Quote",
  description: "Contact RÖLTEK TRADING PLC for IVECO spare parts inquiries. Located in Addis Ababa, Ethiopia. Phone: +251 91 187 0000",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
