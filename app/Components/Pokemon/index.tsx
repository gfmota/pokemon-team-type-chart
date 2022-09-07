import Image from "next/image";
import React from "react";

import { PokemonI, TypeEnum } from "../../types";
import { PokemonStyled } from "../../style";
import Type from "../Type";
import { useTeamContext } from "../../Context/TeamContext";

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

type PokemonProps = {
  pokemon: PokemonI,
}
const Pokemon = ({ pokemon: {name, types, sprite} }: PokemonProps) =>  {
  const { removePokemon, select, diselect, selected } = useTeamContext();

  return (
    <PokemonStyled
      onMouseEnter={() => select(name)}
      onMouseLeave={diselect}
      grayscale={selected && selected !== name}
      glow={selected === name}
    >
      <div>{capitalize(name)}</div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        {types.map((type: TypeEnum) => <Type id={type} key={type} />)}
      </div>
      <Image src={sprite} width={120} height={120} alt="in game sprite" />
      <Image
        src='/icons/trash.svg'
        width={42} height={42}
        alt='Add pokemon'
        onClick={() => removePokemon(name)}
        style={{cursor: 'pointer'}}
      />
    </PokemonStyled>
  );
}

export default Pokemon;
