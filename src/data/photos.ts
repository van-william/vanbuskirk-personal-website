
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
    title: "Morning Fog",
    description: "Hiking into Morning Fog",
    imageUrl: "https://images.unsplash.com/photo-1572319630485-7561461920de",
    category: "Landscape",
    width: 1200,
    height: 800,
  },
  {
    id: "2",
    title: "Doors Closing",
    description: "San Francisco Public Transit at Night",
    imageUrl: "https://images.unsplash.com/photo-1569764434365-72172f3d01f9",
    category: "Architecture",
    width: 1920,
    height: 1371,
  },
  {
    id: "3",
    title: "Winter Snowshoe Adventure",
    description: "Mt. Rainier in Winter",
    imageUrl: "https://images.unsplash.com/photo-1569768421343-cfaf83d78091",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
];

export const categories = [...new Set(photos.map(photo => photo.category))];
