import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/headshot.jpg";

const About = () => {
  return (
    <>
      <PageHeader
        title="About Me"
        description="AI-native data product builder: signal to decision, fast."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Hello, I'm William VanBuskirk
            </h2>
            <p className="text-lg mb-4 text-muted-foreground">
              <strong>Chicago, IL</strong> | william.n.vanbuskirk@gmail.com | (901) 517-5445 | williamvanbuskirk.com
            </p>

            <p className="text-lg mb-6 text-muted-foreground">
              I build data products that turn noise into signal and signal into
              decision—bridging manufacturing, analytics, and AI.
            </p>

            <h4 className="text-xl md:text-xl font-bold mb-4">Leadership Purpose</h4>
            <p className="text-lg mb-6 text-muted-foreground">
              Lead with curiosity and conviction to help teams see—and reach—new heights.
            </p>

            <h4 className="text-xl md:text-xl font-bold mb-4">Values</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Ambiguity: Curiosity over Fear</li>
              <li>Adversity: Zeal over Pessimism</li>
              <li>Ambition: Growth over Politics</li>
            </ul>

            <br />
            <p className="text-lg mb-6 text-muted-foreground">
              My career has spanned factory floors and data platforms—designing,
              implementing, and scaling systems that connect real-world operations
              to digital intelligence. I balance building with leading—rolling up my sleeves
              when needed and equipping others to move faster with clarity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Build (OT)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Machine Monitoring</li>
              <li>MQTT</li>
              <li>OPC-UA</li>
              <li>Node-RED</li>
              <li>PLC / SCADA</li>
              <li>Tulip Interfaces (MES)</li>
              <li>Manufacturing Root Cause Analysis</li>
            </ul>
          </div>

          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Build (IT)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Python</li>
              <li>SQL</li>
              <li>Databricks</li>
              <li>Kedro</li>
              <li>ELT / ETL</li>
              <li>Data Validation / Quality</li>
              <li>Retrieval / Embeddings</li>
              <li>AI/LLM Workflows</li>
            </ul>
          </div>

          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Strategize</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Operations Strategy</li>
              <li>Make vs. Buy Strategy</li>
              <li>Sourcing Strategy</li>
              <li>Private Equity Value Creation</li>
              <li>Private Equity Operational Due Diligence</li>
            </ul>
          </div>

          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Lead</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Cloud Partnership Engagement</li>
              <li>ISV Co-Sell Strategy</li>
              <li>Sales Enablement</li>
              <li>Ecosystem Partnerships</li>
              <li>Technology Partnerships</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Tulip — Alliances Lead */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Tulip Interfaces — Alliances Lead (2024–Present)</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Scaled AWS co-sell motion to $2M+ ARR; concurrently managed Azure, PwC, Deloitte alliances.</li>
                <li>Authored integration guides/playbooks to enable partner-led selling at scale.</li>
                <li>Managed $MM+ partner-generated pipeline across alliances and channel partners.</li>
              </ul>
            </div>
          </div>

          {/* Tulip — Marketplace Lead (Library) */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Tulip Interfaces — Marketplace Lead (Library) (2023–2024)</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Grew partner ecosystem 0 → 20; standardized onboarding; drove 40+ partner integrations.</li>
                <li>Built 30+ factory-ready Tulip Library apps to accelerate adoption and usage.</li>
                <li>Shipped v0 shop-floor data pipelines (Databricks, Snowflake) to speed time-to-value.</li>
                <li>Delivered "Composable MES" templates now used by 100+ customers globally.</li>
              </ul>
            </div>
          </div>

          {/* PwC — Senior Manager */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">PwC, Digital Operations (PDM) — Senior Manager (2022–2023)</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li><strong>EV OEM:</strong> Led 12-person team on material flow transformation; improved inventory accuracy 52% → 89% via PLC → Snowflake → Tableau SPC workflows.</li>
                <li><strong>Defense Prime:</strong> Designed & implemented Smart Factory PoC; delivered $17M cost-reduction business case. Built streaming CNC/PLC pipelines enabling same-day RCA on prototype runs.</li>
              </ul>
            </div>
          </div>

          {/* PwC — Earlier Roles */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">PwC — Manager / Senior Associate / Associate (2017–2022)</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li><strong>Consumer goods OEM:</strong> Built supply control tower (30 suppliers) protecting ~1M PCBAs during shortage.</li>
                <li><strong>Navy supplier:</strong> Make‑vs‑buy ML segmentation identified $13M gap; realized ~$6M savings.</li>
                <li><strong>Power tools OEM:</strong> Labor analytics improved OEE by 15% and unlocked &gt;$2M savings.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div>
            <h3 className="text-lg font-semibold">
              Kellogg School of Management, Northwestern University
            </h3>
            <p className="text-muted-foreground">MBA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Purdue University</h3>
            <p className="text-muted-foreground">BS Mechanical Engineering (GPA 3.99)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Peking University</h3>
            <p className="text-muted-foreground">Chinese Language Certificate (HSK4)</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Interests</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            Reading (C.S. Lewis, Nassim Taleb, Edward Tufte), golf, photography, travel
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
