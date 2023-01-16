import React from 'react';
import { capitalize } from '../../../../utils';
import { useAbilitySelector } from './hook';
import { StyledSelect } from '../../style';

export const AbilitySelector = () => {
  const { onAbilityChange, ability, abilities } = useAbilitySelector();

  return (
    <StyledSelect onChange={onAbilityChange} value={ability}>
      {abilities.map((abt: string) => (
        <option key={abt} value={abt}>
          {capitalize(abt)}
        </option>
      ))}
    </StyledSelect>
  );
};
