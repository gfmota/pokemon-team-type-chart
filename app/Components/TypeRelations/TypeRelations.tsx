import React from 'react';
import { StyledTypeRelationsWrapper } from './style';
import { useTypeRelations } from './hooks';
import { TypeChart } from './TypeChart';

export const TypeRelations = () => {
  const { typeRelations } = useTypeRelations();
  if (typeRelations === null) return null;

  return (
    <StyledTypeRelationsWrapper>
      <TypeChart typeRelations={typeRelations} />
    </StyledTypeRelationsWrapper>
  );
};
