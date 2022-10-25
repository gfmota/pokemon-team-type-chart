import Image from 'next/image';
import React from 'react';
import { InputContainerStyled, InputStyled } from '../../style';
import Autocomplete from './Autocomplete';
import { usePokemonInput } from './hooks';

const Form = () => {
  const { onChange, onSubmit, inputValue, inputRef, loading } =
    usePokemonInput();

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <InputContainerStyled ref={inputRef}>
        <InputStyled
          onChange={onChange}
          placeholder="Pokemon name or ID"
          value={inputValue}
        />
        <Autocomplete />
      </InputContainerStyled>
      <Image
        src="/buttons/addPokemon.svg"
        width={42}
        height={42}
        alt="Add pokemon"
        onClick={onSubmit as any}
        style={{
          cursor: 'pointer',
          filter: loading ? 'grayscale(1)' : '',
          transition: '.3s',
        }}
      />
    </form>
  );
};

export default Form;
