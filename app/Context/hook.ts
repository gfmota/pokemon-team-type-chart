import { useCallback, useContext } from 'react';
import { PokemonI, TypeRelationsI } from '../types';
import { ActionTypes } from './model';
import { TeamContext } from './TeamContext';

export const useTeamContext = () => {
  const { state, dispatch } = useContext(TeamContext);

  const onFocus = useCallback(
    (pokemonId: number) =>
      dispatch({
        type: ActionTypes.FOCUS_POKEMON,
        data: { pokemonId },
      }),
    [dispatch]
  );
  const onUnfocus = useCallback(
    () =>
      dispatch({
        type: ActionTypes.UNFOCUS,
        data: {},
      }),
    [dispatch]
  );

  const addPokemon = useCallback(
    (pokemon: PokemonI) => {
      if (state.team.length >= 6) {
        throw new Error('Your team is already full');
      }
      if (state.team.find((pkmn) => pkmn.name === pokemon.name)) {
        throw new Error(`${pokemon.name} is already in your team`);
      }

      dispatch({
        type: ActionTypes.ADD_POKEMON,
        data: { pokemon },
      });
    },
    [state, dispatch]
  );

  const removePokemon = useCallback(
    (pokemonId: number) => {
      onUnfocus();
      dispatch({
        type: ActionTypes.REMOVE_POKEMON,
        data: { pokemonId },
      });
    },
    [dispatch]
  );

  const setTypeRelations = useCallback(
    (pokemonId: number, typeRelations: TypeRelationsI) =>
      dispatch({
        type: ActionTypes.SET_TYPE_RELATIONS,
        data: { pokemonId, typeRelations },
      }),
    [dispatch]
  );

  return {
    ...state,
    addPokemon,
    removePokemon,
    onFocus,
    onUnfocus,
    setTypeRelations
  };
};
