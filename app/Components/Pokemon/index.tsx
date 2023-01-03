import Image from 'next/image';
import React from 'react';

import { PokemonI, TypeEnum } from '../../types';
import { PokemonStyled } from '../../style';
import Type from '../Type';
import { useTeamContext } from '../../Context/hook';

type PokemonProps = {
  pokemon: PokemonI;
};

const Pokemon = ({ pokemon: { name, types, sprite, id } }: PokemonProps) => {
  const { pokemonOnFocus, removePokemon, onFocus, onUnfocus } = useTeamContext();
  const hasFocus = !!pokemonOnFocus;
  const isFocus = pokemonOnFocus === id;

  return (
    <PokemonStyled
      onMouseEnter={() => onFocus(id)}
      onMouseLeave={onUnfocus}
      grayscale={hasFocus && !isFocus}
      glow={isFocus}
    >
      <div>{name}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        {types.map((type: TypeEnum) => (
          <Type id={type} key={type} />
        ))}
      </div>
      <Image
        src={sprite}
        width={120}
        height={120}
        alt="in game sprite"
        style={{ transform: isFocus ? 'scale(1.1)' : '', transition: '.7s' }}
      />
      <Image
        src="/buttons/trash.svg"
        width={42}
        height={42}
        alt={`Remove ${name}`}
        onClick={() => removePokemon(id)}
        style={{ cursor: 'pointer' }}
      />
    </PokemonStyled>
  );
};

export default Pokemon;
