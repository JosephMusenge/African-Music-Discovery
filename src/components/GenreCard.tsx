import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GenreCardProps {
  genre: string;
  image: string;
}

export const GenreCard: React.FC<GenreCardProps> = ({ genre, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/genre/${genre.toLowerCase()}`)}
      className="relative h-48 rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
    >
      <img
        src={image}
        alt={genre}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
        <h3 className="text-xl font-bold text-white">{genre}</h3>
      </div>
    </div>
  );
};