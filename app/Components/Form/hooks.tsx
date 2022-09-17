import { FormEvent, useCallback } from "react";
import { TYPE_IMMUNITY_ABILITIES } from "../../constants";
import { useTeamContext } from "../../Context/TeamContext";
import { PokemonI } from "../../types";
import { POKEMON_REQUEST_URL, TYPE_REQUEST_URL } from "./constants";
import { useFormContext } from "./Context/FormContext";

const removeItem = (from: any[], item: any) => from.splice(from.indexOf(item), 1);

const getTypeRelations = async (types: string[], ability: string) => {
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

  const typeImmunityAbility = TYPE_IMMUNITY_ABILITIES.find(a => a.name === ability)
  if (typeImmunityAbility) {
    const { type } = typeImmunityAbility;
    removeItem(typeRelations.x4, type);
    removeItem(typeRelations.x2, type);
    removeItem(typeRelations.x05, type);
    removeItem(typeRelations.x025, type);
    typeRelations.x0.push(type);
  };

  return typeRelations;
}

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const createPokemonFromJSON = async (json: any): Promise<PokemonI> => {
  const {
    name,
    types: typesArr,
    sprites: spriteObj,
    abilities: abilitiesArr,
  } = json;
  const types = typesArr.map((typeObj: any) => typeObj.type.name);
  const sprite = spriteObj.front_default;
  const abilities = abilitiesArr.map((ability: any) => ability.ability.name);
  const typeRelations = await getTypeRelations(types, abilities[0]);

  return {
    name: capitalize(name),
    types,
    sprite,
    typeRelations,
    abilities,
    selectedAbility: 0,
  };
}

const treatInputValue = (input: string) => input.toLowerCase().replace(' ', '-');

export function usePokemonInput() {
  const { inputValue, setInputValue, inputRef } = useFormContext();
  const { addPokemon, setError } = useTeamContext();

  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setInputValue((e.target as any).value);
  }, [setInputValue]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const treatedInputValue = treatInputValue(inputValue);
    try {
      const response = await fetch(`${POKEMON_REQUEST_URL}${treatedInputValue}`);
      const json = await response.json();
      const pokemon = await createPokemonFromJSON(json);
      addPokemon(pokemon);
      setInputValue('');
    }
    catch (err) {
      setError(`${inputValue} not found`);
    }
  }

  return {
    onChange,
    onSubmit,
    inputValue,
    inputRef
  }
}
