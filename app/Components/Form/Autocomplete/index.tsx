import React from 'react';
import { AutocompleteStyled } from '../../../style';
import { useAutocomplete } from './hooks';
import { StyledPokemonIcon } from './style';

interface AutocompleteProps {
  pokemonList: { name: string; id: number }[];
}

const Autocomplete = ({ pokemonList }: AutocompleteProps) => {
  const { autocompleteSuggestions, onClick, showAutocomplete } =
    useAutocomplete(pokemonList);

  if (!showAutocomplete || autocompleteSuggestions.length === 0) return null;

  return (
    <AutocompleteStyled>
      {autocompleteSuggestions.map(({ name, id }) => (
        <li
          key={name}
          onClick={() => onClick(name)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <StyledPokemonIcon idNum={id} /> {name}
        </li>
      ))}
    </AutocompleteStyled>
  );
};

export default Autocomplete;
