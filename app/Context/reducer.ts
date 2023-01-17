import { TypeRelationsI } from '../model';
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
    case ActionTypes.SET_TYPE_RELATIONS:
      if (!action.data.pokemonId) throw new Error('Pokemon ID undefined');
      if (!action.data.typeRelations)
        throw new Error('Type Relations undefined');
      return {
        ...state,
        team: state.team.map((pokemon) =>
          pokemon.id !== action.data.pokemonId
            ? pokemon
            : {
                ...pokemon,
                typeRelations: action.data.typeRelations as TypeRelationsI,
              }
        ),
      };
    case ActionTypes.OPEN_OVERVIEW:
      if (!action.data.pokemonId) throw new Error('Pokemon ID undefined');
      return {
        ...state,
        overviewPokemonID: action.data.pokemonId,
      };
    case ActionTypes.CLOSE_OVERVIEW:
      return {
        ...state,
        overviewPokemonID: undefined,
      };
    default:
      throw new Error('Action not found');
  }
};
