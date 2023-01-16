import { useCallback } from 'react';
import { usePokemonContext } from '../../Context/PokemonContext';

export const useAbilitySelector = () => {
  const { ability, abilities, setAbility } = usePokemonContext();

  const onAbilityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setAbility(e.target.value),
    [setAbility]
  );

  return { ability, abilities, onAbilityChange };
};
