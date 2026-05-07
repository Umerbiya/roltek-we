import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 text-brand-600">
        <SearchX className="w-12 h-12" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        We couldn&apos;t find the page you are looking for. It might have been moved or the link is broken.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/products">Browse Spare Parts</Link>
        </Button>
      </div>
      
      <div className="mt-16 pt-8 border-t border-border w-full max-w-md">
        <p className="text-sm text-muted-foreground font-medium mb-4">Popular Pages:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/about" className="text-sm font-semibold text-primary hover:underline">About RÖLTEK</Link>
          <Link href="/team" className="text-sm font-semibold text-primary hover:underline">Our Team</Link>
          <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
