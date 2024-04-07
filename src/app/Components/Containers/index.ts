export type Pokemon = {
    id: number;
    nombre: string;
    vida: number;
    tipo: string;
    fuerza: number;
    webformatURL: string;
    precio: number;
  };
  export interface PokemonData {
    name: string;
    stats: { stat: { name: string }; base_stat: number }[];
    types: { type: { name: string } }[];
    sprites: {
      front_default: string;
    };
  }
  export type CartItem = {
    id: number;
    type: "pokemon" | "pixabayImage";
    item: Pokemon | PixabayImage;
    quantity: number;
  };
  export type PixabayImage = {
    id: number;
    nombre: string;
    webformatURL: string;
    tags: string;
    precio: number;
  };
  export interface PixabayImageData {
    id: number;
    webformatURL: string;
    tags: string;
    user: string;
  }
