import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

import lightLogo from "@/assets/logo-light.png"; // Light mode logo
import darkLogo from "@/assets/logo-dark.png"; // Dark mode logo

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Reading", path: "/reading" },
  { name: "Blog", path: "/blog" },
  { name: "Photography", path: "/photography" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme(); // Get current theme

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2" aria-label="Home">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Logo"
              className="max-h-8 h-auto w-auto transition-all duration-300"
            />
              <span className="text-lg font-medium tracking-tight">William VanBuskirk</span>
            </NavLink>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary link-underline",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out z-40",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6 pt-20 px-4 h-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium py-2 border-b border-border transition-colors animate-fade-in",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
              style={{ 
                animationDelay: `${navItems.indexOf(item) * 50}ms`
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
