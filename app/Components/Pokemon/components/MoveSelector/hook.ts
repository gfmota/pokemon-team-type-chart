import { useCallback } from 'react';
import { usePokemonContext } from '../../Context/hook';

export const useMoveSelector = (index: number) => {
  const { moves, pokemon, setMove } = usePokemonContext();

  const onMoveChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setMove(index, e.target.value),
    [setMove]
  );

  return {
    onMoveChange,
    selectedMove: moves[index],
    moveList: pokemon?.moves.map(({ name }) => name) || [],
  };
};
