import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';

import { PokemonI, TypeEnum } from '../../types';
import {
  StyledIconButton,
  StyledInfoWrapper,
  StyledPokemonTypesWrapper,
  StyledPokemonWrapper,
} from './style';
import Type from '../Type';
import { usePokemon } from './hook';
import { capitalize } from '../../utils';
import { Overview } from './components/Overview/Overview';
import PokemonContextProvider from './Context/PokemonContext';
import { AbilitySelector } from './components/AbilitySelector/AbilitySelector';
import { FlexBox } from '../../style';

type PokemonProps = {
  pokemon: PokemonI;
};

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const {
    onRemove,
    onHover,
    onBlur,
    isGrayscale,
    isFocus,
    onOverview,
    overviewPokemonID,
  } = usePokemon(pokemon);
  const { types, name, id } = pokemon;

  return (
    <PokemonContextProvider pokemon={pokemon}>
      <StyledPokemonWrapper
        onMouseEnter={onHover}
        onMouseLeave={onBlur}
        grayscale={isGrayscale}
        isFocus={isFocus}
        type={types[0]}
      >
        <FlexBox alignItems='center' justifyContent='center' style={{ height: '100%', width: '100px' }}>
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
          alt="in game sprite"
          style={{ maxWidth: '100%', maxHeight: '100%'}}
        />
        </FlexBox>
        <StyledInfoWrapper>
          <FlexBox alignItems='center' >
            <div>{capitalize(name)}</div>
            <StyledIconButton title={`Overview`} onClick={onOverview}>
              <GiMagnifyingGlass size={16} />
            </StyledIconButton>
            <StyledIconButton
              title={`Remove ${capitalize(name)}`}
              onClick={onRemove}
              color="#ff5757"
            >
              <FiTrash2 size={16} />
            </StyledIconButton>
          </FlexBox>
          <StyledPokemonTypesWrapper>
            {types.map((type: TypeEnum) => (
              <Type id={type} key={type} />
            ))}
          </StyledPokemonTypesWrapper>
          <AbilitySelector />
        </StyledInfoWrapper>
      </StyledPokemonWrapper>
      {id === overviewPokemonID && <Overview pokemon={pokemon} />}
    </PokemonContextProvider>
  );
};
