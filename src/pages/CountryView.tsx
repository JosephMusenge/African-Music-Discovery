import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';
import { SongCard } from '../components/SongCard';

export const CountryView: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { selectedCountry, songs } = useStore();
  
  const countrySongs = songs.filter(song => 
    song.country.toLowerCase() === selectedCountry?.name.toLowerCase()
  );

  if (!selectedCountry) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <p>Country not found</p>
          <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      <div className="max-w-4xl mx-auto p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          Back to Map
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
            className="w-12 h-8 object-cover rounded-md"
          />
          <h1 className="text-3xl font-bold">{selectedCountry.name}</h1>
        </div>

        <div className="space-y-4">
          {countrySongs.length > 0 ? (
            countrySongs.map(song => (
              <SongCard key={song.id} song={song} />
            ))
          ) : (
            <p className="text-slate-400">No songs available for this country yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};