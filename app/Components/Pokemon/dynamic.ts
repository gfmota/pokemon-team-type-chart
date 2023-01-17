import dynamic from 'next/dynamic';

export const DynamicPokemon = dynamic(() =>
  import('./Pokemon').then((mod) => mod.Pokemon)
);
