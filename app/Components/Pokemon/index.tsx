import Image from "next/image";
import React, { useMemo } from "react";

import { PokemonI, TypeEnum } from "../../types";
import { PokemonStyled } from "../../style";
import Type from "../Type";
import { useTeamContext } from "../../Context/TeamContext";
import { diselectPokemon, removePokemon, selectPokemon } from "../../Context/actions";

type PokemonProps = {
  pokemon: PokemonI,
}

const Pokemon = ({ pokemon: {name, types, sprite, selected} }: PokemonProps) =>  {
  const { team, dispatch } = useTeamContext();
  const hasSelected = useMemo(() => !!Object.values(team).find((pkmn: any) => pkmn.selected), [team]);
  console.log({selected})

  return (
    <PokemonStyled
      onMouseEnter={() => dispatch(selectPokemon(name))}
      onMouseLeave={() => dispatch(diselectPokemon())}
      grayscale={hasSelected && !selected}
      glow={selected}
    >
      <div>{name}</div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        {types.map((type: TypeEnum) => <Type id={type} key={type} />)}
      </div>
      <Image
        src={sprite} width={120} height={120} alt="in game sprite"
        style={{transform: selected ? 'scale(1.1)' : '', transition: '.7s'}}
      />
      <Image
        src='/buttons/trash.svg'
        width={42} height={42}
        alt={`Remove ${name}`}
        onClick={() => dispatch(removePokemon(name))}
        style={{cursor: 'pointer'}}
      />
    </PokemonStyled>
  );
}

export default Pokemon;
