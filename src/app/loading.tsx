import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-500 rounded-full blur-[40px] opacity-20 animate-pulse" />
        <Loader2 className="w-12 h-12 text-primary animate-spin relative z-10" />
      </div>
      <p className="mt-4 text-sm font-medium text-muted-foreground animate-pulse tracking-widest uppercase">
        Loading...
      </p>
    </div>
  );
}
