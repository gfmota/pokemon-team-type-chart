import { Action, ActionTypes, State } from './model';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_ABILITY:
      if (!action.data.ability) throw new Error('Ability undefined');
      return {
        ...state,
        ability: action.data.ability,
      };
    default:
      throw new Error('Action not found');
  }
};
