import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-6 py-24 md:py-32", className)}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground tracking-tight">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
};
