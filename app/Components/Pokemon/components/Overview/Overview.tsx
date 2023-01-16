import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { PokemonI, TypeEnum } from '../../../../types';
import { capitalize } from '../../../../utils';
import { IconButton } from '../../../IconButton';
import Type from '../../../Type';
import { AbilitySelector } from '../AbilitySelector/AbilitySelector';
import { useOverview } from './hook';
import { StyledOverviewWrapper, StyledCanva } from './style';

interface OverviewProps {
  pokemon: PokemonI;
}

export const Overview = ({ pokemon }: OverviewProps) => {
  const { onClose } = useOverview(pokemon);
  const { name, types } = pokemon;

  return (
    <>
      <StyledCanva onClick={onClose} />
      <StyledOverviewWrapper>
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
          alt="in game sprite"
          style={{ maxWidth: '100%' }}
        />
        <div>
          <div>{capitalize(name)}</div>
          <div style={{ display: 'flex' }}>
            {types.map((type: TypeEnum) => (
              <Type id={type} key={type} />
            ))}
          </div>
          <AbilitySelector />
        </div>

        <IconButton
          IconComponent={IoMdClose}
          onClick={onClose}
          style={{ position: 'absolute', top: 10, right: 10 }}
        />
      </StyledOverviewWrapper>
    </>
  );
};
