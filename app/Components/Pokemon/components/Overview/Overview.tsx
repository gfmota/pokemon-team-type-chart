import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FlexBox, FlexColumn } from '../../../../style';
import { PokemonI, TypeEnum } from '../../../../model';
import { capitalize } from '../../../../utils';
import { IconButton } from '../../../IconButton';
import Type from '../../../Type';
import { AbilitySelector, InGameSprite } from '../';
import { useOverview } from './hook';
import {
  StyledOverviewWrapper,
  StyledCanva,
  StyledTypeChartsWrapper,
  StyledTitleWrapper,
} from './style';
import { MoveSelector } from '../MoveSelector/MoveSelector';
import { TypeChart } from '../../../TypeRelations';

export interface OverviewProps {
  pokemon: PokemonI;
}

export const Overview: React.FC<OverviewProps> = ({ pokemon }) => {
  const { onClose, pokemonTypeRelations, movesTypeRelations } =
    useOverview(pokemon);
  const { name, types } = pokemon;

  return (
    <>
      <StyledCanva onClick={onClose} />
      <StyledOverviewWrapper>
        <FlexColumn
          alignItems="center"
          style={{ height: '100%', width: '40%' }}
        >
          <StyledTitleWrapper
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            {capitalize(name)}
            <FlexBox gap={5}>
              {types.map((type: TypeEnum) => (
                <Type id={type} key={type} />
              ))}
            </FlexBox>
          </StyledTitleWrapper>
          <InGameSprite pokemonName={name} width="80%" />
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
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}
          >
            {[0, 1, 2, 3].map((ind) => (
              <MoveSelector index={ind} />
            ))}
          </div>
          <StyledTypeChartsWrapper>
            <div>
              Takes damage from:
              <TypeChart typeRelations={pokemonTypeRelations} />
            </div>
            <div>
              Deals damage to:
              <TypeChart typeRelations={movesTypeRelations} simpleTypes />
            </div>
          </StyledTypeChartsWrapper>
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
