import { PokemonI, TypeRelationsI } from '../model';

export interface State {
  team: PokemonI[];
  pokemonOnFocus?: number;
  overviewPokemonID?: number;
}

export enum ActionTypes {
  ADD_POKEMON = 'ADD_POKEMON',
  REMOVE_POKEMON = 'REMOVE_POKEMON',
  FOCUS_POKEMON = 'FOCUS_POKEMON',
  UNFOCUS = 'UNFOCUS',
  SET_TYPE_RELATIONS = 'SET_TYPE_RELATIONS',
  OPEN_OVERVIEW = 'OPEN_OVERVIEW',
  CLOSE_OVERVIEW = 'CLOSE_OVERVIEW',
}

export interface Action {
  type: ActionTypes;
  data: {
    pokemon?: PokemonI;
    pokemonId?: number;
    typeRelations?: TypeRelationsI;
  };
}
