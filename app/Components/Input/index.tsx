import Image from "next/image";
import React from "react";
import { InputStyled } from "../../style";
import { usePokemonInput } from "./hooks";

const Input = () => {
  const { onChange, onSubmit, autoCompleteComponent, inputValue } = usePokemonInput();

  return (
    <>
    <form onSubmit={onSubmit} style={{display: 'flex', justifyContent:'center'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <InputStyled placeholder="Pokemon name or ID" onChange={onChange} value={inputValue as string} />
        <div>{autoCompleteComponent}</div>
      </div>
      <Image
        src='/icons/addPokemon.svg'
        width={42} height={42}
        alt='Add pokemon'
        onClick={onSubmit as any}
        style={{cursor: 'pointer'}}
      />
    </form>
    </>
  );
}

export default Input
