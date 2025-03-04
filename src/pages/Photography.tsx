
import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhotoCard } from "@/components/ui/photo-card";
import { photos, categories } from "@/data/photos";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter photos based on selected category
  const filteredPhotos = selectedCategory
    ? photos.filter(photo => photo.category === selectedCategory)
    : photos;

  return (
    <>
      <PageHeader
        title="Photography"
        description="A collection of moments and perspectives captured through my lens."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </>
  );
};

export default Photography;
