import { create } from 'zustand';
import { Song, Country } from '../types';
import { demoSongs } from '../data/demoSongs';

interface Store {
  currentSong: Song | null;
  isPlaying: boolean;
  favorites: Song[];
  selectedCountry: Country | null;
  songs: Song[];
  setCurrentSong: (song: Song | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  toggleFavorite: (song: Song) => void;
  setSelectedCountry: (country: Country | null) => void;
}

export const useStore = create<Store>((set) => ({
  currentSong: null,
  isPlaying: false,
  favorites: [],
  selectedCountry: null,
  songs: demoSongs,
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  toggleFavorite: (song) =>
    set((state) => ({
      favorites: state.favorites.some((s) => s.id === song.id)
        ? state.favorites.filter((s) => s.id !== song.id)
        : [...state.favorites, song],
    })),
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));