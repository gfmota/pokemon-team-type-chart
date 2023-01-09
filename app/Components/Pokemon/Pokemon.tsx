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
import { usePokemon } from './hook';

type PokemonProps = {
  pokemon: PokemonI;
};

const capitalize = (name: string) => name.split('-').map((str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`).join(' ');

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const { onRemove, onHover, onBlur, isGrayscale, isFocus, onAbilityChange } = usePokemon(pokemon);
  const { types, name, abilities } = pokemon;

  return (
    <StyledPokemonWrapper
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      grayscale={isGrayscale}
      isFocus={isFocus}
      type={types[0]}
    >
      <img
        src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
        alt="in game sprite"
      />
      <StyledInfoWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>{capitalize(name)}</div>
          <StyledIconButton title={`Remove ${capitalize(name)}`} onClick={onRemove}>
            <FiTrash2 size={16} />
          </StyledIconButton>
        </div>
        <StyledPokemonTypesWrapper>
          {types.map((type: TypeEnum) => (
            <Type id={type} key={type} />
          ))}
        </StyledPokemonTypesWrapper>
        <select onChange={onAbilityChange}>
          {abilities.map(ability => <option key={ability} value={ability} >{capitalize(ability)}</option>)}
        </select>
      </StyledInfoWrapper>
    </StyledPokemonWrapper>
  );
};
