import dynamic from 'next/dynamic';
import Loading from '../Loading';
import { PokemonProps } from './Pokemon';

export const DynamicPokemon = dynamic<PokemonProps>(() =>
  import('./Pokemon').then((mod) => mod.Pokemon), {
    loading: Loading,
  }
);
