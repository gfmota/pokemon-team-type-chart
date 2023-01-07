import { TypeEnum } from './types';

type TypesBackgroundColorsI = {
  [key in TypeEnum]: {
    main: string;
    background: string;
  };
};

export const TypesBackgroundColors: TypesBackgroundColorsI = {
  normal: { main: '#A8A77A', background: '#f4f3c6' },
  fire: { main: '#EE8130', background: '#ffcd7c' },
  water: { main: '#6390F0', background: '#afdcff' },
  electric: { main: '#F7D02C', background: '#ffff78' },
  grass: { main: '#7AC74C', background: '#c6ff98' },
  ice: { main: '#96D9D6', background: '#e2ffff' },
  fighting: { main: '#C22E28', background: '#ff7a74' },
  poison: { main: '#A33EA1', background: '#ef8aed' },
  ground: { main: '#E2BF65', background: '#ffffb1' },
  flying: { main: '#A98FF3', background: '#f5dbff' },
  psychic: { main: '#F95587', background: '#ffa1d3' },
  bug: { main: '#A6B91A', background: '#f2ff66' },
  rock: { main: '#B6A136', background: '#ffed82' },
  ghost: { main: '#735797', background: '#bfa3e3' },
  dragon: { main: '#6F35FC', background: '#bb81ff' },
  dark: { main: '#705746', background: '#bca392' },
  steel: { main: '#B7B7CE', background: '#ddddf4' },
  fairy: { main: '#D685AD', background: '#ffd1f9' },
};

export const TABLET_MAX_WIDTH = 1024;
export const MOBILE_MAX_WIDTH = 600;
