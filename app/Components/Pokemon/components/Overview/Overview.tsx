import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FlexBox } from '../../../../style';
import { PokemonI, TypeEnum } from '../../../../types';
import { capitalize } from '../../../../utils';
import { IconButton } from '../../../IconButton';
import Type from '../../../Type';
import TypeRelations from '../../../TypeRelations';
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
        <FlexBox
          alignItems="center"
          justifyContent="center"
          style={{ height: '100%', width: '40%' }}
        >
          <img
            src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
            alt="in game sprite"
            width="80%"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </FlexBox>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <div>{capitalize(name)}</div>
          <FlexBox>
            {types.map((type: TypeEnum) => (
              <Type id={type} key={type} />
            ))}
          </FlexBox>
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
