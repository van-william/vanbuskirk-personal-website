
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadPhotos } from "@/utils/content-loader";
import { Photo } from "@/data/photos";
import { PhotoCard } from "@/components/ui/photo-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const fetchedPhotos = await loadPhotos();
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error("Error loading photos:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPhotos();
  }, []);
  
  // Display only a few selected photos
  const featuredPhotos = photos.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Photography
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my favorite photographs capturing moments and perspectives.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 md:mt-0" asChild>
            <Link to="/photography" className="group flex items-center">
              View full gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[200px] rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
