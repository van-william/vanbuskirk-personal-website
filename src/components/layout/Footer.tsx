
import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">William VanBuskirk</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              A personal website showcasing projects, blogs, and photography.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/photography" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Photography
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/van_bus_kirk" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/van-william" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/wvanbuskirk/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} William VanBuskirk
          </p>
        </div>
      </div>
    </footer>
  );
}
