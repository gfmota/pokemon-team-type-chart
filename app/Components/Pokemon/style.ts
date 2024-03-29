import styled from 'styled-components';
import { TypesBackgroundColors } from '../../constants';
import { FlexBox, FlexColumn } from '../../style';
import { TypeEnum } from '../../model';

type StyledPokemonWrapperIProps = {
  grayscale: boolean;
  isFocus: boolean;
  type: TypeEnum;
};

export const StyledPokemonWrapper = styled(FlexBox)<StyledPokemonWrapperIProps>`
  border-radius: 1em;
  background-color: ${({ type }) =>
    TypesBackgroundColors[type].background || '#807d7b'};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  max-height: 250px;
  min-height: 150px;
  padding: 10px;
  margin: 0 1.5em 1.5em 1.5em;
  gap: 5px;

  align-items: center;

  transition: 0.7s;

  ${({ grayscale }) =>
    grayscale &&
    `
    filter: grayscale(1);
  `}

  ${({ isFocus }) =>
    isFocus &&
    `
    box-shadow: 0px 0px 25px 0px #807d7b;
    transform: scale(1.1);
  `}
`;

export const StyledInfoWrapper = styled(FlexColumn)`
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  font-size: 1.5em;
  font-weight: bold;
`;

interface StyledIconButtonProps {
  color?: string;
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  ${({ color }) => color && `color: ${color};`}
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-left: 0.2em;
  transition: 0.5s;

  * {
    transition: inherit;
  }

  :hover {
    filter: brightness(0.85);
    > * {
      transform: scale(1.1);
    }
  }
`;

export const StyledPokemonTypesWrapper = styled(FlexBox)`
  justify-content: space-evenly;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 0.5em;
  padding: 0.5em 0.8em;
`;
