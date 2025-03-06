
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Designer, developer, and creative thinker passionate about crafting beautiful digital experiences."
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Hello, I'm William VanBuskirk</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate designer and developer with over 5 years of experience creating digital products that are both beautiful and functional. I specialize in web development, user interface design, and content creation.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Based in [Your City], I work with clients and companies around the world to bring their visions to life through thoughtful design and clean code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/resume.pdf" className="flex items-center gap-2">
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
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js, Vue</li>
              <li>Tailwind CSS, Styled Components</li>
              <li>Node.js, Express</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-xl font-bold mb-4">Design</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Design Systems</li>
              <li>Figma, Adobe XD</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div className="p-6 bg-background rounded-lg border shadow-sm">
            <h3 className="text-xl font-bold mb-4">Content Creation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Photography</li>
              <li>Technical Writing</li>
              <li>Markdown</li>
              <li>SEO Optimization</li>
              <li>Content Strategy</li>
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
              <h3 className="text-xl font-bold">Senior Web Developer</h3>
              <p className="text-muted-foreground mb-2">Company Name • 2021 - Present</p>
              <p className="text-muted-foreground">
                Led the development of responsive web applications using React and modern frontend technologies. Collaborated with designers and stakeholders to deliver high-quality digital experiences.
              </p>
            </div>
          </div>
          
          <div className="relative pl-10 border-l-2 pb-12">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">UI/UX Designer</h3>
              <p className="text-muted-foreground mb-2">Another Company • 2018 - 2021</p>
              <p className="text-muted-foreground">
                Created user-centered designs for web and mobile applications. Conducted user research and usability testing to inform design decisions and improve user experience.
              </p>
            </div>
          </div>
          
          <div className="relative pl-10 border-l-2">
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            <div>
              <h3 className="text-xl font-bold">Web Developer</h3>
              <p className="text-muted-foreground mb-2">First Company • 2016 - 2018</p>
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
