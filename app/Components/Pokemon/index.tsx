import Image from "next/image";
import React from "react";

import { PokemonI, TypeEnum } from "../../types";
import { PokemonLayout } from "../../style";
import Type from "../Type";

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

type PokemonProps = {
  pokemon: PokemonI,
}
const Pokemon = ({ pokemon: {name, types, sprite} }: PokemonProps) =>  (
  <PokemonLayout>
    {capitalize(name)}
    <div style={{display: 'flex', justifyContent: 'space-evenly', width: 'inherit'}}>
      {types.map((type: TypeEnum) => <Type id={type} key={type} />)}
    </div>
    <Image src={sprite} width={120} height={120} alt="in game sprite" />
  </PokemonLayout>
)

export default Pokemon;
