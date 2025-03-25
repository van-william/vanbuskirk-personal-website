
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
  {
    id: "4",
    title: "Hiking in Denali National Park",
    description: "Backcountry Hiking",
    imageUrl: "https://images.unsplash.com/photo-1572109646045-7cce4196cfd7",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
  {
    id: "5",
    title: "Alaska Mountain Clouds",
    description: "Orca Spotting in Seward, Alaska",
    imageUrl: "https://images.unsplash.com/photo-1572109656125-40130b31e757",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
  {
    id: "6",
    title: "Florentine Countryside",
    description: "Foothills in Florence",
    imageUrl: "https://images.unsplash.com/photo-1572319738785-085298702580",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
  {
    id: "7",
    title: "Winding Roads",
    description: "Driving in San Francisco",
    imageUrl: "https://images.unsplash.com/photo-1572268468761-82219408301b",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
];

export const categories = [...new Set(photos.map(photo => photo.category))];
