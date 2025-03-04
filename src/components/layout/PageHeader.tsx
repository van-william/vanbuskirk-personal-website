
import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ 
  title, 
  description, 
  className,
  children
}: PageHeaderProps) {
  return (
    <div className={cn("py-12 md:py-20 border-b", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mb-8">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
