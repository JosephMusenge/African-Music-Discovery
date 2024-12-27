import React from 'react';
import { Map } from '../components/Map';
import { SearchBar } from '../components/SearchBar';
import { GenreCard } from '../components/GenreCard';
import { Music } from 'lucide-react';
import { featuredGenres } from '../data/featuredGenres';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      <header className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Music size={32} className="text-blue-500" />
              <h1 className="text-2xl font-bold">African Music Discovery</h1>
            </div>
          </div>
          <SearchBar />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Explore African Music</h2>
          <Map />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Featured Genres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGenres.map((genre) => (
              <GenreCard
                key={genre.name}
                genre={genre.name}
                image={genre.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};