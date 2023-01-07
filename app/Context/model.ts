import { PokemonI, TypeRelationsI } from '../types';

export interface State {
  team: PokemonI[];
  pokemonOnFocus?: number;
}

export enum ActionTypes {
  ADD_POKEMON = 'ADD_POKEMON',
  REMOVE_POKEMON = 'REMOVE_POKEMON',
  FOCUS_POKEMON = 'FOCUS_POKEMON',
  UNFOCUS = 'UNFOCUS',
  SET_TYPE_RELATIONS = 'SET_TYPE_RELATIONS',
}

export interface Action {
  type: ActionTypes;
  data: {
    pokemon?: PokemonI;
    pokemonId?: number;
    typeRelations?: TypeRelationsI;
  };
}
