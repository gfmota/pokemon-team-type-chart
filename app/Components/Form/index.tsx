import Image from "next/image";
import React from "react";
import { InputContainerStyled, InputStyled } from "../../style";
import { usePokemonInput } from "./hooks";

const Form = () => {
  const { onChange, onSubmit, autoCompleteComponent, inputValue } = usePokemonInput();

  return (
    <form onSubmit={onSubmit} style={{display: 'flex', justifyContent:'center'}}>
      <InputContainerStyled>
        <InputStyled
          onChange={onChange}
          placeholder="Pokemon name or ID" 
          value={inputValue} />
        <div>{autoCompleteComponent}</div>
      </InputContainerStyled>
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

export default Form
