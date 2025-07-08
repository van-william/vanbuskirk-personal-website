
import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhotoCard } from "@/components/ui/photo-card";
import { loadPhotos } from "@/utils/content-loader";
import { Photo } from "@/data/photos";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Photography = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
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
  
  // Get all unique categories
  const categories = Array.from(new Set(photos.map(photo => photo.category)));
  
  // Filter photos based on selected category
  const filteredPhotos = selectedCategory
    ? photos.filter(photo => photo.category === selectedCategory)
    : photos;

  return (
    <>
      <PageHeader
        title="Photography"
        description="moments from travels and adventures"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <>
              <div className="mb-8 py-4">
                <div className="flex space-x-2 overflow-x-auto">
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-[200px] rounded-lg" />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="mb-8 overflow-x-auto py-4">
                <div className="flex space-x-2 min-w-max">
                  <Badge
                    variant={selectedCategory === null ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-4 py-2",
                      selectedCategory === null ? "bg-primary" : "hover:bg-secondary"
                    )}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </Badge>
                  {categories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer px-4 py-2",
                        selectedCategory === category ? "bg-primary" : "hover:bg-secondary"
                      )}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPhotos.map(photo => (
                  <PhotoCard key={photo.id} photo={photo} />
                ))}
              </div>
              
              {filteredPhotos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No photos found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Photography;
