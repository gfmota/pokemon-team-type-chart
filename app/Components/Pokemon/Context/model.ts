import { PokemonI } from '../../../types';

export interface State {
  ability: string;
  moves: [string, string, string, string];
  pokemon?: PokemonI;
}

export enum ActionTypes {
  CHANGE_ABILITY = 'CHANGE_ABILITY',
  SET_MOVE = 'SET_MOVE',
}

export interface Action {
  type: ActionTypes;
  data: {
    ability?: string;
    moves?: [string, string, string, string];
  };
}
