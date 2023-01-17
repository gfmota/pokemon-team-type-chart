import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { getMoveData } from '../../../../Services';
import { usePokemonContext } from '../../Context/hook';

export const useMoveSelector = (index: number) => {
  const { moves, pokemon, setMove } = usePokemonContext();
  const selectedMove = moves[index];
  const { data: moveData } = useQuery(selectedMove, () =>
    getMoveData(pokemon?.moves.find(({ name }) => name === selectedMove)?.url)
  );

  const onMoveChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setMove(index, e.target.value),
    [setMove]
  );

  return {
    onMoveChange,
    selectedMove,
    moveData,
    moveList: pokemon?.moves.map(({ name }) => name) || [],
  };
};
