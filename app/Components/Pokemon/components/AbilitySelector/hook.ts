import { useCallback } from 'react';
import { usePokemonContext } from '../../Context/hook';

export const useAbilitySelector = () => {
  const { ability, pokemon, setAbility } = usePokemonContext();

  const onAbilityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setAbility(e.target.value),
    [setAbility]
  );

  return { ability, abilities: pokemon?.abilities || [], onAbilityChange };
};
