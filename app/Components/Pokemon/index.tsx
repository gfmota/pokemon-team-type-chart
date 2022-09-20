import Image from "next/image";
import React from "react";

import { PokemonI, TypeEnum } from "../../types";
import { PokemonStyled } from "../../style";
import Type from "../Type";
import { useTeamContext } from "../../Context/TeamContext";

type PokemonProps = {
  pokemon: PokemonI,
}

const Pokemon = ({ pokemon: {name, types, sprite} }: PokemonProps) =>  {
  const { removePokemon, select, diselect, selected } = useTeamContext();
  const hasSelected = selected !== null;
  const isSelected = selected === name;

  return (
    <PokemonStyled
      onMouseEnter={() => select(name)}
      onMouseLeave={diselect}
      grayscale={hasSelected && !isSelected}
      glow={isSelected}
    >
      <div>{name}</div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        {types.map((type: TypeEnum) => <Type id={type} key={type} />)}
      </div>
      <Image
        src={sprite} width={120} height={120} alt="in game sprite"
        style={{transform: isSelected ? 'scale(1.1)' : '', transition: '.7s'}}
      />
      <Image
        src='/buttons/trash.svg'
        width={42} height={42}
        alt={`Remove ${name}`}
        onClick={() => removePokemon(name)}
        style={{cursor: 'pointer'}}
      />
    </PokemonStyled>
  );
}

export default Pokemon;
