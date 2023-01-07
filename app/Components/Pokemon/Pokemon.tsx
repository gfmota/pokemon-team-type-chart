import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { PokemonI, TypeEnum } from '../../types';
import {
  StyledIconButton,
  StyledInfoWrapper,
  StyledPokemonTypesWrapper,
  StyledPokemonWrapper,
} from './style';
import Type from '../Type';
import { useTeamContext } from '../../Context/hook';
import { usePokemon } from './hook';

type PokemonProps = {
  pokemon: PokemonI;
};

export const Pokemon = ({ pokemon: { name, types, id } }: PokemonProps) => {
  const { onRemove, onHover, onBlur, isGrayscale, isFocus } = usePokemon({
    id,
  });

  return (
    <StyledPokemonWrapper
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      grayscale={isGrayscale}
      isFocus={isFocus}
      type={types[0]}
    >
      <img
        src={`https://play.pokemonshowdown.com/sprites/ani/${name.toLowerCase()}.gif`}
        alt="in game sprite"
        width={120}
        height={120}
      />
      <StyledInfoWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>{name}</div>
          <StyledIconButton title={`Remove ${name}`} onClick={onRemove}>
            <FiTrash2 size={16} />
          </StyledIconButton>
        </div>
        <StyledPokemonTypesWrapper>
          {types.map((type: TypeEnum) => (
            <Type id={type} key={type} />
          ))}
        </StyledPokemonTypesWrapper>
      </StyledInfoWrapper>
    </StyledPokemonWrapper>
  );
};
