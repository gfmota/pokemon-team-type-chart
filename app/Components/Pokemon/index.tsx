import Image from "next/image";
import React from "react";
import { useTeamContext } from "../../Context/TeamContext";

const Types = ({types}: any) => {
  console.log({types})
  return (
    <div style={{backgroundColor: 'black'}}>
      <Image src={`/icons/${types[0]}.svg`} width={16} height={16} alt={types[0]}/>
      {types[1] && <Image src={`/icons/${types[1]}.svg`} width={16} height={16} alt={types[1]}/>}
    </div>
  )
}

const Pokemon = () => {
  const { pokemon } = useTeamContext();
  if (!pokemon) return null;

  return (
    <>
      {pokemon.name}
      <Types types={pokemon.types} />
      <Image src={pokemon.sprite} width={120} height={120} alt="in game sprite" />
    </>
  )
}

export default Pokemon;
