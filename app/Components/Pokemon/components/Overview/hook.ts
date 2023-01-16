import { useCallback } from 'react';
import { useTeamContext } from '../../../../Context/hook';
import { PokemonI } from '../../../../types';
import { usePokemonContext } from '../../Context/PokemonContext';

export const useOverview = (pokemon: PokemonI) => {
  const { closeOverview } = useTeamContext();
  const { changeAbility } = usePokemonContext();

  const onAbilityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => changeAbility(e.target.value),
    [changeAbility]
  );

  return { onClose: closeOverview, onAbilityChange };
};
