import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "../Context/FormContext";

export const useAutocomplete = () => {
  const { inputValue, setInputValue, showAutocomplete } = useFormContext()
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchFullPokemonList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1154');
      const json = await response.json();
      setPokemonList(json.results.map((pokemon: any) => pokemon.name));
    };

    fetchFullPokemonList();
  }, [setPokemonList]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setAutocompleteSuggestions([]);
      return;
    }

    setAutocompleteSuggestions(pokemonList.filter(name =>
        name.indexOf(inputValue.toLowerCase()) > -1 && inputValue !== name
      ).sort((a, b) => a.indexOf(inputValue.toLowerCase()) - b.indexOf(inputValue.toLowerCase()))
    );
  }, [inputValue, setAutocompleteSuggestions, pokemonList]);

  const onClick = useCallback((suggestion: string) => setInputValue(suggestion), [setInputValue]);

  return { autocompleteSuggestions, onClick, showAutocomplete };
}
