import { Action, ActionTypes, State } from './model';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_POKEMON:
      if (!action.data.pokemon) throw new Error('Pokemon undefined');
      return {
        ...state,
        team: [...state.team, action.data.pokemon],
      };
    case ActionTypes.REMOVE_POKEMON:
      if (!action.data.pokemonId) throw new Error('Pokemon ID undefined');
      return {
        ...state,
        team: state.team.filter(({ id }) => action.data.pokemonId !== id),
      };
    case ActionTypes.FOCUS_POKEMON:
      if (!action.data.pokemonId) throw new Error('Pokemon ID undefined');
      return {
        ...state,
        pokemonOnFocus: action.data.pokemonId,
      };
    case ActionTypes.UNFOCUS:
      return {
        ...state,
        pokemonOnFocus: undefined,
      };
  }
};
