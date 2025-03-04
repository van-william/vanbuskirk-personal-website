
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main
        className={cn(
          "flex-1 pt-16 transition-opacity duration-300", 
          "animate-fade-in"
        )}
        key={location.pathname}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
