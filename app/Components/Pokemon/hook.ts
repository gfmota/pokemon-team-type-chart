import { useCallback } from 'react';
import { useTeamContext } from '../../Context/hook';
import { PokemonI } from '../../model';

export const usePokemon = ({ id }: PokemonI) => {
  const {
    pokemonOnFocus,
    removePokemon,
    onFocus,
    onUnfocus,
    openOverview,
    overviewPokemonID,
  } = useTeamContext();
  const hasFocus = !!pokemonOnFocus;
  const isFocus = pokemonOnFocus === id;

  const onRemove = useCallback(() => removePokemon(id), [removePokemon, id]);

  const onHover = useCallback(() => onFocus(id), [onFocus, id]);

  const onOverview = useCallback(() => {
    openOverview(id);
    onUnfocus();
  }, [openOverview, id]);

  return {
    onRemove,
    onOverview,
    onHover,
    onBlur: onUnfocus,
    isGrayscale: hasFocus && !isFocus,
    isFocus,
    overviewPokemonID,
  };
};
