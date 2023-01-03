import Image from 'next/image';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { PokemonI, TypeEnum } from '../../types';
import { PokemonStyled } from '../../style';
import Type from '../Type';
import { useTeamContext } from '../../Context/hook';
import { IconButton } from '../IconButton';

type PokemonProps = {
  pokemon: PokemonI;
};

const Pokemon = ({ pokemon: { name, types, sprite, id } }: PokemonProps) => {
  const { pokemonOnFocus, removePokemon, onFocus, onUnfocus } =
    useTeamContext();
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
      <img
        src={`https://play.pokemonshowdown.com/sprites/ani/${name.toLowerCase()}.gif`}
        alt="in game sprite"
        width={120}
        height={120}
        style={{ transform: isFocus ? 'scale(1.25)' : '', transition: '.7s' }}
      />
      <IconButton
        IconComponent={FiTrash2}
        title={`Remove ${name}`}
        onClick={() => removePokemon(id)}
      />
    </PokemonStyled>
  );
};

export default Pokemon;
