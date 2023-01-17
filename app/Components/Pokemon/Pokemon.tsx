import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';

import { PokemonI, TypeEnum } from '../../model';
import {
  StyledIconButton,
  StyledInfoWrapper,
  StyledPokemonTypesWrapper,
  StyledPokemonWrapper,
} from './style';
import Type from '../Type';
import { usePokemon } from './hook';
import { capitalize } from '../../utils';
import PokemonContextProvider from './Context/PokemonContext';
import { AbilitySelector, Overview, InGameSprite } from './components';
import { FlexBox } from '../../style';

export interface PokemonProps {
  pokemon: PokemonI;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
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
        <FlexBox
          alignItems="center"
          justifyContent="center"
          style={{ height: '100%', width: '100px' }}
        >
          <InGameSprite pokemonName={name} />
        </FlexBox>
        <StyledInfoWrapper>
          <FlexBox alignItems="center">
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
