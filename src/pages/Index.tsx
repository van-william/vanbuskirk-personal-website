
import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestProjects } from "@/components/home/LatestProjects";
import { LatestPosts } from "@/components/home/LatestPosts";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <LatestProjects />
      <LatestPosts />
      <PhotoGallery />
      <ContactSection />
    </>
  );
};

export default Index;
