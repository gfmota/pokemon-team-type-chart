import React, { FormEvent, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext";
import { PokemonI } from "../../types";

const createPokemonFromJSON = (json: any): PokemonI => {
  const {name,
    types: typesArr,
    sprites: spriteObj,
  } = json;
  const types = typesArr.map((typeObj: any) => typeObj.type.name)
  const sprite = spriteObj.front_default;

  return {
    name,
    types,
    sprite
  };
}

const Input = () => {
  const [inputValue, setInputValue] = useState<String>('');
  const [error, setError] = useState<boolean>(false);
  const { addPokemon } = useTeamContext();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const json = await response.json();
      const pokemon = createPokemonFromJSON(json);
      addPokemon(pokemon);
      setError(false);
    }
    catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">enviar</button>
      </form>
      {error && 'ID ou nome não encontrado'}
    </>
  )
}

export default Input
