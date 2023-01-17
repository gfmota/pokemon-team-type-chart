import React from 'react';
import { AutocompleteStyled, FlexBox } from '../../../style';
import { useAutocomplete } from './hooks';
import { StyledPokemonIcon } from './style';

interface AutocompleteProps {
  pokemonList: { name: string; id: number }[];
}

export const Autocomplete = ({ pokemonList }: AutocompleteProps) => {
  const { autocompleteSuggestions, onClick, showAutocomplete } =
    useAutocomplete(pokemonList);

  if (!showAutocomplete || autocompleteSuggestions.length === 0) return null;

  return (
    <AutocompleteStyled>
      {autocompleteSuggestions.map(({ name, id }) => (
        <FlexBox key={name} onClick={() => onClick(name)} alignItems="center">
          <StyledPokemonIcon idNum={id} /> {name}
        </FlexBox>
      ))}
    </AutocompleteStyled>
  );
};
