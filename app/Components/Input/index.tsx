import Image from "next/image";
import React from "react";
import { InputStyled } from "../../style";
import { usePokemonInput } from "./hooks";

const Input = () => {
  const { setInputValue, onSubmit } = usePokemonInput();

  return (
    <form onSubmit={onSubmit} style={{display: 'flex', justifyContent:'center'}}>
      <InputStyled style={{}} onChange={(e) => setInputValue(e.target.value)} />
      <Image
        src='/icons/addPokemon.svg'
        width={42} height={42}
        alt='Add pokemon'
        onClick={onSubmit as any}
        style={{cursor: 'pointer'}}
      />
    </form>
  );
}

export default Input
