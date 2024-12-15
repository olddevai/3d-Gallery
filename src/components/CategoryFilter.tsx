import { useGalleryStore } from '../store/galleryStore';

export default function CategoryFilter() {
  const { categories, selectedCategory, setSelectedCategory } = useGalleryStore();

  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedCategory === null
            ? 'bg-[#FF6B6B] text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-[#FF6B6B] text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
}