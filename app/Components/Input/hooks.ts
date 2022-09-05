import { FormEvent, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext";
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
    name,
    types,
    sprite,
    typeRelations,
  };
}

export const usePokemonInput = () => {
  const [inputValue, setInputValue] = useState<String>('');
  const [error, setError] = useState<boolean>(false);
  const { addPokemon } = useTeamContext();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${POKEMON_REQUEST_URL}${inputValue}`);
      const json = await response.json();
      const pokemon = await createPokemonFromJSON(json);
      addPokemon(pokemon);
      setError(false);
    }
    catch (err) {
      setError(true);
    }
  }

  return {
    error,
    onSubmit,
    setInputValue,
  }
}
