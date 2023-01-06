import React from 'react';
import { AutocompleteStyled } from '../../../style';
import { useAutocomplete } from './hooks';

const Autocomplete = () => {
  const { autocompleteSuggestions, onClick, showAutocomplete } =
    useAutocomplete();

  if (!showAutocomplete || autocompleteSuggestions.length === 0) return null;

  return (
    <AutocompleteStyled>
      {autocompleteSuggestions.map((suggestion) => (
        <li key={suggestion} onClick={() => onClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </AutocompleteStyled>
  );
};

export default Autocomplete;
