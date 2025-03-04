
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
