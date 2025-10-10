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
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Key Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Factory Analytics & Quality</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>OEE Analytics</li>
              <li>Manufacturing Traceability</li>
              <li>Machine Monitoring</li>
              <li>IT / OT Architecture</li>
              <li>Quality Root Cause Analysis</li>
              <li>SPC (Cp/Cpk)</li>
            </ul>
          </div>

          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Data Science & ML</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Python, SQL</li>
              <li>scikit-learn, Keras</li>
              <li>Exploratory Data Analysis</li>
              <li>AI/LLM Workflows</li>
              <li>Retrieval / Embeddings</li>
              <li>Frontline Operations Use Cases</li>
            </ul>
          </div>

          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Pipelines & Factory Systems</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Databricks, Kedro</li>
              <li>ELT / ETL, Data Validation</li>
              <li>MQTT, OPC-UA</li>
              <li>Node-RED, PLC / SCADA</li>
              <li>Tulip Integration</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Tulip Alliances & Partnerships */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Alliances & Partnerships Manager</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>
                  Scaled alliance pipeline to increase alliance-led deals from AWS, Microsoft, and more
                  by selling a packaged solution including Tulip, cloud hyperscaler architecture, and more.
                </li>
                <li>
                  Scaled Tulip’s partner ecosystem from 0 → 20 partners, driving 40+ joint
                  integrations and standardized onboarding frameworks.
                </li>
                <li>
                  Built alignment between product, marketing, and alliances teams to
                  position Tulip apps within AWS, Microsoft, and system-integrator
                  ecosystems.
                </li>
                <li>
                  Defined playbooks for PoC development, GTM alignment, and
                  co-marketing with hardware and software partners.
                </li>
              </ul>
            </div>
          </div>

          {/* Tulip Product Manager */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Product Manager — Library, Marketplace</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  Refined Tulip's app library with factory-ready apps for customers to accelerate adoption.
                </li>
                <li>
                  Built pipelines from shop-floor apps to Databricks, Snowflake, and
                  Microsoft Fabric for real-time production insights.
                </li>
                <li>
                  Standardized test/factory integration patterns using MQTT and
                  OPC-UA; improved data lineage and traceability across deployments.
                </li>
              </ul>
            </div>
          </div>

          
          {/* PwC */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">
                Senior Manager — Digital Operations (Product Development & Manufacturing)
              </h3>

              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong>EV OEM:</strong> Led 12-person team on material-flow
                  transformation; improved inventory accuracy 52% → 89% via
                  PLC → Snowflake → Tableau SPC workflows.
                </li>
                <li>
                  <strong>Defense Prime:</strong> Designed Smart Factory PoC with $17M
                  cost-reduction impact; built streaming CNC/PLC pipelines enabling
                  same-day root-cause analysis.
                </li>
              </ul>
            </div>
          </div>

          {/* PwC Earlier Roles */}
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Manager / Senior Associate / Associate</h3>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong>Aerospace & Defense:</strong> Delivered continuous-improvement
                  platform on Azure; reduced corrective-action loop time by ~30%.
                </li>
                <li>
                  <strong>Consumer Goods:</strong> Built supply-visibility control tower
                  across 100+ sources and 30 suppliers—protected ~1M PCBAs amid
                  shortages.
                </li>
                <li>
                  <strong>Navy Supplier:</strong> Make-vs-buy ML segmentation identified
                  $13M cost gap → $6M savings.
                </li>
                <li>
                  <strong>Power Tools Manufacturer:</strong> Labor-analytics platform
                  improved OEE by 15%, unlocking >$2M savings.
                </li>
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
