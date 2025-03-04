
export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  width: number;
  height: number;
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "Mountain Reflection",
    description: "A serene mountain lake with perfect reflection at sunrise.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    category: "Landscape",
    width: 1200,
    height: 800,
  },
  {
    id: "2",
    title: "Urban Geometry",
    description: "Modern architecture creating geometric patterns against a clear sky.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
    category: "Architecture",
    width: 800,
    height: 1200,
  },
  {
    id: "3",
    title: "Autumn Path",
    description: "A winding path through vibrant autumn trees.",
    imageUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891",
    category: "Landscape",
    width: 1200,
    height: 800,
  },
  {
    id: "4",
    title: "City Lights",
    description: "Nighttime cityscape with twinkling lights reflecting on water.",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Urban",
    width: 1200,
    height: 800,
  },
  {
    id: "5",
    title: "Desert Dunes",
    description: "Rippling sand dunes at sunset creating dramatic shadows.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    category: "Landscape",
    width: 800,
    height: 1200,
  },
  {
    id: "6",
    title: "Forest Mist",
    description: "Morning mist rising through pine forest.",
    imageUrl: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50",
    category: "Landscape",
    width: 1200,
    height: 800,
  },
  {
    id: "7",
    title: "Geometric Building",
    description: "Looking up at a modern building with striking geometric patterns.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    category: "Architecture",
    width: 800,
    height: 1200,
  },
  {
    id: "8",
    title: "Ocean Waves",
    description: "Powerful ocean waves crashing against rocks at sunset.",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    category: "Seascape",
    width: 1200,
    height: 800,
  },
  {
    id: "9",
    title: "Historic Alleyway",
    description: "Narrow cobblestone street in an old European city.",
    imageUrl: "https://images.unsplash.com/photo-1526315169309-3f6e4a5b1692",
    category: "Urban",
    width: 800,
    height: 1200,
  },
  {
    id: "10",
    title: "Minimalist Bridge",
    description: "Clean architectural lines of a modern pedestrian bridge.",
    imageUrl: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e",
    category: "Architecture",
    width: 1200,
    height: 800,
  },
];

export const categories = [...new Set(photos.map(photo => photo.category))];
