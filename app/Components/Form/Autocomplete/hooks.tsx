import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from '../Context/FormContext';

export const useAutocomplete = (
  pokemonList: { name: string; id: number }[]
) => {
  const { inputValue, setInputValue, showAutocomplete } = useFormContext();
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    { name: string; id: number }[]
  >([]);

  useEffect(() => {
    if (inputValue.length === 0 || !pokemonList) {
      setAutocompleteSuggestions([]);
      return;
    }

    setAutocompleteSuggestions(
      pokemonList
        .filter(
          ({ name }) =>
            name.indexOf(inputValue.toLowerCase()) > -1 && inputValue !== name
        )
        .sort(
          (a, b) =>
            a.name.indexOf(inputValue.toLowerCase()) -
            b.name.indexOf(inputValue.toLowerCase())
        )
    );
  }, [inputValue, setAutocompleteSuggestions, pokemonList]);

  const onClick = useCallback(
    (suggestion: string) => setInputValue(suggestion),
    [setInputValue]
  );

  return { autocompleteSuggestions, onClick, showAutocomplete };
};
