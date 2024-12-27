export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  genre: string;
  country: string;
  duration: number;
  isFavorite: boolean;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
  coordinates: [number, number];
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songs: Song[];
}