import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

const OpenAI = () => {
  return (
    <>
      <PageHeader
        title="Portfolio Tour "
        description="AI + Hardware experiences"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  A walkthrough of my career journey and experiences
                </p>
              </div>
              
              {/* Embedded Loom Video */}
              <div className="relative w-full" style={{ paddingBottom: '64.90384615384616%' }}>
                <iframe 
                  src="https://www.loom.com/embed/54d8e536ea1d4337b361dd00235c1107?sid=7140c414-6b40-46b2-b001-60ae8f3a2a5c" 
                  frameBorder="0" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  title="OpenAI Integration Demo"
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Video hosted on Loom • Click to play
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default OpenAI;
