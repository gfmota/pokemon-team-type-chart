import { PokemonI } from '../../../types';

export interface State {
  ability: string;
  pokemon?: PokemonI;
}

export enum ActionTypes {
  CHANGE_ABILITY = 'CHANGE_ABILITY',
}

export interface Action {
  type: ActionTypes;
  data: {
    ability?: string;
  };
}
