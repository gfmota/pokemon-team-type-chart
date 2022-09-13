import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext";
import { AutocompleteStyled } from "../../style";
import { PokemonI } from "../../types";
import { POKEMON_REQUEST_URL, TYPE_REQUEST_URL } from "./constants";

const removeItem = (from: any[], item: any) => from.splice(from.indexOf(item), 1);

const getTypeRelations = async (types: string[]) => {
  const typeRelations: any = {
    x4: [],
    x2: [],
    x05: [],
    x025: [],
    x0: [],
  };

  const response = await fetch(`${TYPE_REQUEST_URL}${types[0]}`);
  const json = await response.json();
  json.damage_relations.double_damage_from.forEach((type: any) => typeRelations.x2.push(type.name));
  json.damage_relations.half_damage_from.forEach((type: any) => typeRelations.x05.push(type.name));
  json.damage_relations.no_damage_from.forEach((type: any) => typeRelations.x0.push(type.name));

  if (types[1]) {
    const responseST = await fetch(`${TYPE_REQUEST_URL}${types[1]}`);
    const jsonST = await responseST.json();
    jsonST.damage_relations.double_damage_from.forEach(({name}: any) => {
      if (typeRelations.x0.includes(name)) return;
      if (typeRelations.x2.includes(name)) {
        removeItem(typeRelations.x2, name);
        typeRelations.x4.push(name);
        return;
      }
      if (typeRelations.x05.includes(name)) {
        removeItem(typeRelations.x05, name);
        return;
      }
      typeRelations.x2.push(name)
    });
    jsonST.damage_relations.half_damage_from.forEach(({name}: any) => {
      if (typeRelations.x0.includes(name)) return;
      if (typeRelations.x05.includes(name)) {
        removeItem(typeRelations.x05, name);
        typeRelations.x025.push(name);
        return;
      }
      if (typeRelations.x2.includes(name)) {
        removeItem(typeRelations.x2, name);
        return;
      }
      typeRelations.x05.push(name)
    });
    jsonST.damage_relations.no_damage_from.forEach(({name}: any) => {
      if (typeRelations.x0.includes(name)) return;
      if (typeRelations.x05.includes(name)) {
        removeItem(typeRelations.x05, name);
      }
      if (typeRelations.x2.includes(name)) {
        removeItem(typeRelations.x2, name);
      }
      typeRelations.x0.push(name)
    });
  }

  return typeRelations;
}

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const createPokemonFromJSON = async (json: any): Promise<PokemonI> => {
  const {
    name,
    types: typesArr,
    sprites: spriteObj,
  } = json;
  const types = typesArr.map((typeObj: any) => typeObj.type.name);
  const sprite = spriteObj.front_default;
  const typeRelations = await getTypeRelations(types);

  return {
    name: capitalize(name),
    types,
    sprite,
    typeRelations,
  };
}

const treatInputValue = (input: string) => input.toLowerCase().replace(' ', '-');

export function usePokemonInput() {
  const [inputValue, setInputValue] = useState<string>('');
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<string[]>([]);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const { addPokemon, setError } = useTeamContext();

  useEffect(() => {
    const fetchFullPokemonList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1154');
      const json = await response.json();
      setPokemonList(json.results.map((pokemon: any) => pokemon.name));
    };
    fetchFullPokemonList();
  }, [setPokemonList]);

  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setInputValue((e.target as any).value);
  }, [setInputValue]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setAutocompleteSuggestions([]);
      return;
    }
    setAutocompleteSuggestions(pokemonList.filter(name =>
        name.indexOf(inputValue.toLowerCase()) > -1
      ).sort((a, b) => a.indexOf(inputValue.toLowerCase()) - b.indexOf(inputValue.toLowerCase()))
    );
  }, [inputValue, setAutocompleteSuggestions]);

  const autoCompleteComponent = useMemo(() => {
    const onClick = (suggestion: string) => setInputValue(suggestion);
    if (!showAutocomplete) return null;

    return (
      <AutocompleteStyled>
        {autocompleteSuggestions.map(suggestion => <li onClick={() => onClick(suggestion)}>{suggestion}</li>)}
      </AutocompleteStyled>
    )}, [autocompleteSuggestions, showAutocomplete, setInputValue])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const treatedInputValue = treatInputValue(inputValue);
    try {
      const response = await fetch(`${POKEMON_REQUEST_URL}${treatedInputValue}`);
      const json = await response.json();
      const pokemon = await createPokemonFromJSON(json);
      addPokemon(pokemon);
    }
    catch (err) {
      setError(`${inputValue} not found`);
    }
  }

  return {
    onChange,
    onSubmit,
    inputValue,
    autoCompleteComponent,
    setShowAutocomplete,
  }
}