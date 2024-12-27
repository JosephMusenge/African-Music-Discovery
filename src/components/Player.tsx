import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Share2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Player: React.FC = () => {
  const { currentSong, isPlaying, toggleFavorite, setIsPlaying } = useStore();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={currentSong.albumArt}
            alt={currentSong.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold">{currentSong.title}</h3>
            <p className="text-slate-400">{currentSong.artist}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hover:text-blue-400">
            <SkipBack size={24} />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="hover:text-blue-400">
            <SkipForward size={24} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            className="hover:text-red-400"
            onClick={() => toggleFavorite(currentSong)}
          >
            <Heart size={24} />
          </button>
          <button className="hover:text-blue-400">
            <Share2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};