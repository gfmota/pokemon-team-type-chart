import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getMoveData } from '../../../../Services';
import { usePokemonContext } from '../../Context/hook';

export const useMoveSelector = (index: number) => {
  const { pokemon, setMove, moves } = usePokemonContext();
  const [selectedMove, setSelectedMove] = useState<string>(
    moves[index]?.name || ''
  );
  const { data: moveData } = useQuery(
    selectedMove,
    () =>
      getMoveData(
        pokemon?.moves.find(({ name }) => name === selectedMove)?.url
      ),
    {
      onSuccess: (data) => data && setMove(index, data),
    }
  );

  const onMoveChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setSelectedMove(e.target.value),
    [setMove]
  );

  return {
    onMoveChange,
    selectedMove,
    moveData,
    moveList: pokemon?.moves.map(({ name }) => name) || [],
  };
};
