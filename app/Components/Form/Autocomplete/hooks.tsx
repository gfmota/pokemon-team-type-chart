import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPokemonList } from '../../../Services';
import { useFormContext } from '../Context/FormContext';

export const useAutocomplete = () => {
  const { inputValue, setInputValue, showAutocomplete } = useFormContext();
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    string[]
  >([]);
  const { data: pokemonList } = useQuery('POKEMON_LIST', getPokemonList);

  useEffect(() => {
    if (inputValue.length === 0 || !pokemonList) {
      setAutocompleteSuggestions([]);
      return;
    }

    setAutocompleteSuggestions(
      pokemonList
        .filter(
          (name) =>
            name.indexOf(inputValue.toLowerCase()) > -1 && inputValue !== name
        )
        .sort(
          (a, b) =>
            a.indexOf(inputValue.toLowerCase()) -
            b.indexOf(inputValue.toLowerCase())
        )
    );
  }, [inputValue, setAutocompleteSuggestions, pokemonList]);

  const onClick = useCallback(
    (suggestion: string) => setInputValue(suggestion),
    [setInputValue]
  );

  return { autocompleteSuggestions, onClick, showAutocomplete };
};
