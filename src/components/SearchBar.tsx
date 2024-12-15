import { Search } from 'lucide-react';
import { useGalleryStore } from '../store/galleryStore';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useGalleryStore();

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
        placeholder="Search images..."
      />
    </div>
  );
}