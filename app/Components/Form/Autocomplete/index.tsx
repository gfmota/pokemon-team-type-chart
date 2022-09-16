import React from 'react';
import { AutocompleteStyled } from '../../../style';
import { useAutocomplete } from './hooks';

const Autocomplete = () => {
  const { autocompleteSuggestions, onClick, showAutocomplete } = useAutocomplete();

  if (!showAutocomplete) return null;

  return (
    <div>
      <AutocompleteStyled>
        {autocompleteSuggestions.map(suggestion =>
            <li key={suggestion} onClick={() => onClick(suggestion)}>{suggestion}</li>
        )}
      </AutocompleteStyled>
    </div>
  );
};

export default Autocomplete;
