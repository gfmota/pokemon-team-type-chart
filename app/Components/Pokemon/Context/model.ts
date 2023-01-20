import { MoveData, PokemonI } from '../../../model';

export interface State {
  ability: string;
  moves: [MoveData | null, MoveData | null, MoveData | null, MoveData | null];
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
    moves?: [
      MoveData | null,
      MoveData | null,
      MoveData | null,
      MoveData | null
    ];
  };
}
