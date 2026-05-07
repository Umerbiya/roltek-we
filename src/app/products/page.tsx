import { ProductsHero } from "@/components/products/ProductsHero";
import { CategoryGrid } from "@/components/products/CategoryGrid";
import { FeaturesSection } from "@/components/products/FeaturesSection";
import { Timeline } from "@/components/products/Timeline";
import { ProductsCTA } from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <CategoryGrid />
      <FeaturesSection />
      <Timeline />
      <ProductsCTA />
    </>
  );
}
