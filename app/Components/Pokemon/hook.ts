import { useCallback } from 'react';
import { useTeamContext } from '../../Context/hook';
import { PokemonI } from '../../types';

interface usePokemonProps {
  id: number;
}

export const usePokemon = ({ id }: usePokemonProps) => {
  const { pokemonOnFocus, removePokemon, onFocus, onUnfocus } =
    useTeamContext();
  const hasFocus = !!pokemonOnFocus;
  const isFocus = pokemonOnFocus === id;

  const onRemove = useCallback(() => removePokemon(id), [removePokemon, id]);

  const onHover = useCallback(() => onFocus(id), [onFocus, id]);

  return {
    onRemove,
    onHover,
    onBlur: onUnfocus,
    isGrayscale: hasFocus && !isFocus,
    isFocus,
  };
};
