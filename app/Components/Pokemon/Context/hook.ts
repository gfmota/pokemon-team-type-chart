import { useCallback, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useTeamContext } from '../../../Context/hook';
import { getPokemonTypesRelations } from '../../../Services';
import { TYPE_IMMUNITY_ABILITIES } from './constants';
import { ActionTypes } from './model';
import { PokemonContext } from './PokemonContext';

export const usePokemonContext = () => {
  const { state, dispatch } = useContext(PokemonContext);
  const { setTypeRelations } = useTeamContext();

  const immunityByAbility = useMemo(
    () => TYPE_IMMUNITY_ABILITIES[state.ability],
    [state]
  );
  useQuery(
    [
      ...(state.pokemon?.types || []),
      immunityByAbility && `immunity to ${immunityByAbility.join()}`,
    ],
    () =>
      state.pokemon &&
      getPokemonTypesRelations(state.pokemon?.types, { immunityByAbility }),
    {
      onSuccess: (data) =>
        state.pokemon && data && setTypeRelations(state.pokemon?.id, data),
    }
  );

  const setAbility = useCallback(
    (ability: string) => {
      dispatch({
        type: ActionTypes.CHANGE_ABILITY,
        data: { ability },
      });
    },
    [dispatch]
  );

  const setMove = useCallback(
    (index: number, moveName: string) => {
      const newMoves = state.moves;
      newMoves[index] = moveName;
      dispatch({
        type: ActionTypes.SET_MOVE,
        data: { moves: newMoves },
      });
    },
    [dispatch]
  );

  console.log(state.moves);

  return {
    ...state,
    setAbility,
    setMove,
  };
};
