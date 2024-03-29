import { Action, ActionTypes, State } from './model';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_ABILITY:
      if (!action.data.ability) throw new Error('Ability undefined');
      return {
        ...state,
        ability: action.data.ability,
      };
    case ActionTypes.SET_MOVE:
      if (!action.data.moves) throw new Error('Moves undefined');
      return {
        ...state,
        moves: action.data.moves,
      };
    default:
      throw new Error('Action not found');
  }
};
