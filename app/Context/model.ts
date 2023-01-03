import { PokemonI } from '../types';

export interface State {
  team: PokemonI[];
  pokemonOnFocus?: number;
}

export enum ActionTypes {
  ADD_POKEMON = 'ADD_POKEMON',
  REMOVE_POKEMON = 'REMOVE_POKEMON',
  FOCUS_POKEMON = 'FOCUS_POKEMON',
  UNFOCUS = 'UNFOCUS'
}

export interface Action {
  type: ActionTypes;
  data: {
    pokemon?: PokemonI;
    pokemonId?: number;
  };
}
