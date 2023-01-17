import { useCallback } from 'react';
import { useTeamContext } from '../../../../Context/hook';
import { PokemonI } from '../../../../model';
import { usePokemonContext } from '../../Context/hook';

export const useOverview = (pokemon: PokemonI) => {
  const { closeOverview } = useTeamContext();
  const { setAbility } = usePokemonContext();

  const onAbilityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setAbility(e.target.value),
    [setAbility]
  );

  return { onClose: closeOverview, onAbilityChange };
};
