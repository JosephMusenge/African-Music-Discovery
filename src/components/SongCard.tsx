import React from 'react';
import { Play, Heart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Song } from '../types';
import { formatDuration } from '../utils/formatDuration';

interface SongCardProps {
  song: Song;
}

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { setCurrentSong, toggleFavorite } = useStore();

  return (
    <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4 group hover:bg-slate-700 transition-colors">
      <div className="relative w-16 h-16 flex-shrink-0">
        <img
          src={song.albumArt}
          alt={song.title}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={() => setCurrentSong(song)}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <Play size={24} className="text-white" />
        </button>
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold text-white">{song.title}</h3>
        <p className="text-slate-400 text-sm">{song.artist}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-slate-400 text-sm">{formatDuration(song.duration)}</span>
        <button
          onClick={() => toggleFavorite(song)}
          className="text-slate-400 hover:text-red-500 transition-colors"
        >
          <Heart size={20} fill={song.isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};