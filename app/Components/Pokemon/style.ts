import styled from 'styled-components';
import { TypesBackgroundColors } from '../../constants';
import { TypeEnum } from '../../types';

type StyledPokemonWrapperIProps = {
  grayscale: boolean;
  isFocus: boolean;
  type: TypeEnum;
};

export const StyledPokemonWrapper = styled.div<StyledPokemonWrapperIProps>`
  border-radius: 1em;
  background-color: ${({ type }) =>
    TypesBackgroundColors[type].background || '#807d7b'};
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  max-height: 250px;
  padding: 10px;
  margin: 0 1.5em 1.5em 1.5em;
  gap: 5px;

  display: flex;
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

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  font-size: 1.5em;
  font-weight: bold;
`;

export const StyledIconButton = styled.button`
  border: none;
  color: #ff5757;
  background-color: inherit;
  cursor: pointer;
  margin-left: 0.2em;
  transition: 0.5s;

  * {
    transition: inherit;
  }

  :hover {
    color: #e84f4f;
    > * {
      transform: scale(1.1);
    }
  }
`;

export const StyledPokemonTypesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
