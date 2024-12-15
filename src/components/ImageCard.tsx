import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Image } from '../types/gallery';
import { useGalleryStore } from '../store/galleryStore';

interface Props {
  image: Image;
  index: number;
}

export default function ImageCard({ image, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y - rect.height / 2) / rect.height) * 20;
    const rotateY = ((x - rect.width / 2) / rect.width) * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-10" />
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-out hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
        <h3 className="text-white text-lg font-semibold mb-2">{image.title}</h3>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-white">
            <Heart className="w-5 h-5 mr-1" />
            {image.likes}
          </button>
          <button className="flex items-center text-white">
            <MessageCircle className="w-5 h-5 mr-1" />
            {image.comments.length}
          </button>
          <button className="flex items-center text-white">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}