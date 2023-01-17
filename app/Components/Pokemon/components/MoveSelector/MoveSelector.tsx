import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { capitalize } from '../../../../utils';
import { useMoveSelector } from './hook';
import { StyledSelect } from '../../style';
import { FlexBox } from '../../../../style';
import Type from '../../../Type';

interface MoveSelectorProps {
  index: number;
}

export const MoveSelector = ({ index }: MoveSelectorProps) => {
  const { onMoveChange, selectedMove, moveData, moveList } =
    useMoveSelector(index);

  return (
    <FlexBox alignItems="center" gap={5}>
      {selectedMove && moveData ? (
        <Type id={moveData.type} size={32} />
      ) : (
        <AiFillQuestionCircle size={32} />
      )}
      <StyledSelect onChange={onMoveChange} value={selectedMove}>
        <option selected={!selectedMove}></option>
        {moveList.map((move: string) => (
          <option key={move} value={move}>
            {capitalize(move)}
          </option>
        ))}
      </StyledSelect>
    </FlexBox>
  );
};
