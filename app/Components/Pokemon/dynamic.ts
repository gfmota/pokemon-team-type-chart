import dynamic from 'next/dynamic';
import { PokemonProps } from './Pokemon';

export const DynamicPokemon = dynamic<PokemonProps>(() =>
  import('./Pokemon').then((mod) => mod.Pokemon)
);
