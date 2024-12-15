import { create } from 'zustand';
import { Image, Category } from '../types/gallery';

interface GalleryState {
  images: Image[];
  categories: Category[];
  selectedCategory: string | null;
  searchQuery: string;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  images: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
      title: 'Mountain Landscape',
      category: 'nature',
      likes: 42,
      comments: []
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
      title: 'Urban Architecture',
      category: 'architecture',
      likes: 35,
      comments: []
    },
    // Add more initial images as needed
  ],
  categories: [
    { id: 'nature', name: 'Nature', count: 1 },
    { id: 'architecture', name: 'Architecture', count: 1 },
  ],
  selectedCategory: null,
  searchQuery: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));