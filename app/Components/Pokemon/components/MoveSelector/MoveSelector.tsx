import React from 'react';
import { capitalize } from '../../../../utils';
import { useMoveSelector } from './hook';
import { StyledSelect } from '../../style';

interface MoveSelectorProps {
  index: number;
}

export const MoveSelector = ({ index }: MoveSelectorProps) => {
  const { onMoveChange, selectedMove, moveList } = useMoveSelector(index);

  return (
    <StyledSelect onChange={onMoveChange} value={selectedMove}>
      <option selected={!selectedMove}></option>
      {moveList.map((move: string) => (
        <option key={move} value={move}>
          {capitalize(move)}
        </option>
      ))}
    </StyledSelect>
  );
};
