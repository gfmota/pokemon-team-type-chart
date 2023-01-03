import Image from 'next/image';
import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

import { InputContainerStyled, InputStyled } from './style';
import Autocomplete from './Autocomplete';
import { usePokemonInput } from './hooks';
import { IconButton } from '../IconButton';

const Form = () => {
  const { onChange, onSubmit, inputValue, inputRef, isLoading, error } =
    usePokemonInput();

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '8px',
      }}
    >
      <InputContainerStyled ref={inputRef}>
        <InputStyled
          onChange={onChange}
          placeholder="Pokemon name or ID"
          value={inputValue}
          error={!!error}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Autocomplete />
      </InputContainerStyled>
      <IconButton
        type="submit"
        IconComponent={BsPlusLg}
        title="Add pokemon"
        style={{
          filter: isLoading ? 'grayscale(1)' : '',
          transition: '.3s',
        }}
      />
    </form>
  );
};

export default Form;
