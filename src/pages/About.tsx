import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from '@/assets/headshot.jpg';

const About = () => {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Passion: translating tech hype to pragmatic value-add."
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Hello, I'm William VanBuskirk</h2>
            <h4 className="text-xl md:text-xl font-bold mb-6">Leadership Purpose</h4>
            <p className="text-lg mb-6 text-muted-foreground">
              Lead from a sense of adventure to bring others to new heights
            </p>
            <h4 className="text-xl md:text-xl font-bold mb-6">Values</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Ambiguity: Curiosity over Fear</li>
              <li>Adversity: Zeal over Pessimism</li>
              <li>Ambition: Growth over Politics</li>
            </ul>
            <br></br>
            <p className="text-lg mb-6 text-muted-foreground">
              I've spent my career in manufacturing across design, operations, strategy, and tech. I like to balance between rolling up my sleeves and building with support and equiping teams at scale.
            </p>
            {/* <p className="text-lg mb-6 text-muted-foreground">
              Based in Chicago, I work with clients and companies around the world to bring their visions to life through thoughtful design and clean code.
            </p> */}
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href="https://carrd-public-vanbuskirk.s3.amazonaws.com/Resume_VanBuskirk_06_07_2024.pdf"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Build</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Python</li>
              <li>SQL</li>
              <li>PowerBI, Tableau</li>
              <li>Azure, AWS</li>
              <li>IoT (MQTT, Node-RED, InfluxDB)</li>
              <li>Machine Learning (SKlearn, Hugging Face, etc.)</li>
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
        <div className="space-y-12 max-w-3xl mx-auto">
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Strategic Partnerships</h3>
              <p className="text-muted-foreground mb-2">Tulip Interfaces</p>
              <p className="text-muted-foreground">
                Led the development of responsive web applications using React and modern frontend technologies. Collaborated with designers and stakeholders to deliver high-quality digital experiences.
              </p>
            </div>
          </div>

          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Senior Manager</h3>
              <p className="text-muted-foreground mb-2">PwC</p>
              <p className="text-muted-foreground">
                Created user-centered designs for web and mobile applications. Conducted user research and usability testing to inform design decisions and improve user experience.
              </p>
            </div>
          </div>

          <div className="relative pl-10 border-l-2">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Manager</h3>
              <p className="text-muted-foreground mb-2">PwC</p>
              <p className="text-muted-foreground">
                Developed and maintained websites and applications for various clients. Implemented responsive designs and integrated content management systems.
              </p>
            </div>
          </div>

          <div className="relative pl-10 border-l-2">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Associate</h3>
              <p className="text-muted-foreground mb-2">PwC</p>
              <p className="text-muted-foreground">
                Developed and maintained websites and applications for various clients. Implemented responsive designs and integrated content management systems.
              </p>
            </div>
          </div>


        </div>
      </Section>
    </>
  );
};

export default About;
