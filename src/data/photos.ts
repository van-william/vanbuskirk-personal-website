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
  {
    id: "8",
    title: "Half Dome",
    description: "Afternoon hiking in Yosemite",
    imageUrl: "https://images.unsplash.com/photo-1569764434762-87dbf1a43369",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
  {
    id: "9",
    title: "Venice",
    description: "On the Water in Venice",
    imageUrl: "https://images.unsplash.com/photo-1572319914847-a5ca5b12aa85",
    category: "Landscape",
    width: 1920,
    height: 1276,
  },
  {
    id: "10",
    title: "Mountain Ascent",
    description: "A challenging climb through rugged terrain reveals nature's raw beauty",
    imageUrl: "/photography_images/the-climb.jpg",
    category: "Adventure",
    width: 1920,
    height: 1280,
  },
  {
    id: "11",
    title: "Alpine Exploration",
    description: "Hiking through misty mountain peaks and valleys",
    imageUrl: "/photography_images/hiking-mountains.jpg",
    category: "Landscape",
    width: 1920,
    height: 1280,
  },
  {
    id: "12",
    title: "Urban Nightscape",
    description: "City lights paint the darkness in a mesmerizing display",
    imageUrl: "/photography_images/rooftops-at-night.jpg",
    category: "Urban",
    width: 1920,
    height: 1280,
  },
  {
    id: "13",
    title: "Dancing Kites",
    description: "Colorful kites soar against a dramatic sky",
    imageUrl: "/photography_images/kites.jpg",
    category: "Culture",
    width: 1920,
    height: 1280,
  },
  {
    id: "14",
    title: "Temple Details",
    description: "Intricate architectural details of an ancient temple",
    imageUrl: "/photography_images/temple-up-close.jpg",
    category: "Architecture",
    width: 1920,
    height: 1280,
  },
  {
    id: "15",
    title: "Suzhou Serenity",
    description: "Traditional Chinese architecture reflects in tranquil waters",
    imageUrl: "/photography_images/suzhou.jpg",
    category: "Architecture",
    width: 1920,
    height: 1280,
  },
  {
    id: "16",
    title: "Chinese Garden",
    description: "Traditional pavilion nestled among lush gardens",
    imageUrl: "/photography_images/chinese-garden.jpg",
    category: "Architecture",
    width: 1920,
    height: 1280,
  }
];

export const categories = [...new Set(photos.map(photo => photo.category))];
