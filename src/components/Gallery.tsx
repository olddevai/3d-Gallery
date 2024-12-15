import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGalleryStore } from '../store/galleryStore';
import ImageCard from './ImageCard';

export default function Gallery() {
  const { images, selectedCategory, searchQuery } = useGalleryStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredImages = images.filter((image) => {
    const matchesCategory = !selectedCategory || image.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6"
    >
      {filteredImages.map((image, index) => (
        <ImageCard key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}