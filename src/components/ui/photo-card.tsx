import React, { useState } from "react";
import { Photo } from "@/data/photos";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface PhotoCardProps {
  photo: Photo;
  className?: string;
}

export function PhotoCard({ photo, className }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden h-full">
          <div className="aspect-video overflow-hidden">
            <img 
              src={photo.imageUrl} 
              alt={photo.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-medium">{photo.title}</h3>
            {photo.description && (
              <p className="text-sm text-white/80">{photo.description}</p>
            )}
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg p-0 bg-transparent border-0">
        <div className="relative bg-background rounded-lg overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-4">
            <h3 className="text-xl font-medium">{photo.title}</h3>
            {photo.description && (
              <p className="text-muted-foreground mt-1">{photo.description}</p>
            )}
            <p className="text-sm mt-2">Category: {photo.category}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
