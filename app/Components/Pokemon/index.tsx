import Image from "next/image";
import React from "react";

import { PokemonI, TypeEnum } from "../../types";
import { PokemonStyled } from "../../style";
import Type from "../Type";
import { useTeamContext } from "../../Context/TeamContext";

type PokemonProps = {
  pokemon: PokemonI,
}

const Pokemon = ({ pokemon: {name, types, sprite, abilities, selectedAbility} }: PokemonProps) =>  {
  const { removePokemon, select, diselect, selected, changeAbility } = useTeamContext();
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
      <select value={selectedAbility} onChange={(e) => changeAbility(name, (e.target as any).value)} >
        {abilities.map((ability, ind) => <option key={ability} value={ind}>{ability}</option>)}
      </select>
      <Image
        src='/icons/trash.svg'
        width={42} height={42}
        alt={`Remove ${name}`}
        onClick={() => removePokemon(name)}
        style={{cursor: 'pointer'}}
      />
    </PokemonStyled>
  );
}

export default Pokemon;
