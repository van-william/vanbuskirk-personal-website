
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ 
  title, 
  description, 
  className, 
  children 
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
