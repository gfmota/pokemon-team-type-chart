import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useTeamContext } from '../../Context/hook';
import { getPokemonTypesRelations } from '../../Services';
import { PokemonI, TypeEnum } from '../../types';
import { TYPE_IMMUNITY_ABILITIES } from './constants';

export const usePokemon = ({ id, types, abilities }: PokemonI) => {
  const { pokemonOnFocus, removePokemon, onFocus, onUnfocus, setTypeRelations } =
    useTeamContext();
  const [immunityByAbility, setImmunityByAbility] = useState<TypeEnum[]|undefined>(TYPE_IMMUNITY_ABILITIES[abilities[0]]);
  useQuery([...types, immunityByAbility && `immunity to ${immunityByAbility.join()}`], () => getPokemonTypesRelations(types, { immunityByAbility }), {
    onSuccess: (data) => setTypeRelations(id, data),
  })
  const hasFocus = !!pokemonOnFocus;
  const isFocus = pokemonOnFocus === id;

  const onRemove = useCallback(() => removePokemon(id), [removePokemon, id]);

  const onHover = useCallback(() => onFocus(id), [onFocus, id]);

  const onAbilityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
    setImmunityByAbility(TYPE_IMMUNITY_ABILITIES[e.target.value])
  , [setImmunityByAbility]);

  return {
    onRemove,
    onHover,
    onBlur: onUnfocus,
    isGrayscale: hasFocus && !isFocus,
    isFocus,
    onAbilityChange
  };
};
