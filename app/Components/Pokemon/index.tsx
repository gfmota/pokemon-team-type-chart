import Image from "next/image";
import React from "react";

import { TypesBackgroundColors } from "../../constants";
import { PokemonI } from "../../types";
import { PokemonLayout, TypeLayout } from "./style";

type TypeProps = {
  id: string,
}
const Type = ({id}: TypeProps) =>  (
  <TypeLayout backgroundColor={TypesBackgroundColors[id]} >
    <Image src={`/icons/${id}.svg`} width={18} height={18} alt={id}/>
  </TypeLayout>
)

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

type PokemonProps = {
  pokemon: PokemonI,
}
const Pokemon = ({ pokemon: {name, types, sprite} }: PokemonProps) =>  (
  <PokemonLayout>
    {capitalize(name)}
    <div style={{display: 'flex', justifyContent: 'space-evenly', width: 'inherit'}}>
      {types.map((type: string) => <Type id={type} key={type} />)}
    </div>
    <Image src={sprite} width={120} height={120} alt="in game sprite" />
  </PokemonLayout>
)

export default Pokemon;
