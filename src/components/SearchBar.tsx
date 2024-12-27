import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search countries, artists, or songs..."
        className="w-full px-4 py-3 pl-12 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
    </div>
  );
};