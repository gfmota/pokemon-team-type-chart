import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FlexBox, FlexColumn } from '../../../../style';
import { PokemonI, TypeEnum } from '../../../../types';
import { capitalize } from '../../../../utils';
import { IconButton } from '../../../IconButton';
import Type from '../../../Type';
import { AbilitySelector } from '../';
import { useOverview } from './hook';
import { StyledOverviewWrapper, StyledCanva } from './style';
import { MoveSelector } from '../MoveSelector/MoveSelector';

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
        <FlexColumn
          alignItems="center"
          style={{ height: '100%', width: '40%' }}
        >
          <FlexBox style={{ fontSize: '2em' }}>
            {capitalize(name)}
            {types.map((type: TypeEnum) => (
              <Type id={type} key={type} />
            ))}
          </FlexBox>
          <img
            src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
            alt="in game sprite"
            width="80%"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </FlexColumn>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <FlexBox gap={5}>
            Ability:
            <AbilitySelector />
          </FlexBox>
          Moves:
          {[0, 1, 2, 3].map((ind) => (
            <MoveSelector index={ind} />
          ))}
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
