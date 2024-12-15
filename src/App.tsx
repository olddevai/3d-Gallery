import React from 'react';
import { Gallery } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import GalleryComponent from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white">
      <header className="sticky top-0 z-50 bg-[#2A2A2A]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Gallery className="w-8 h-8 text-[#FF6B6B]" />
              <h1 className="text-2xl font-bold">3D Gallery</h1>
            </div>
            <SearchBar />
          </div>
          <div className="mt-4">
            <CategoryFilter />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <GalleryComponent />
      </main>
    </div>
  );
}

export default App;