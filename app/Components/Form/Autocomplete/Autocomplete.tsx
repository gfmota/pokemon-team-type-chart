import React from 'react';
import { FlexBox } from '../../../style';
import { useAutocomplete } from './hooks';
import { StyledPokemonIcon, AutocompleteStyled } from './style';

export interface AutocompleteProps {
  pokemonList: { name: string; id: number }[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ pokemonList }) => {
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
