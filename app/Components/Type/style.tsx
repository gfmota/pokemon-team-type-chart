import styled from 'styled-components';
import { FlexBox } from '../../style';

type TypeStyledIProps = {
  backgroundColor: string;
  selected: boolean;
  grayscale: boolean;
  size: number;
};

export const TypeStyled = styled(FlexBox)<TypeStyledIProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
  margin: 2px 0;

  transition: 0.7s;
  ${({ grayscale, selected }) =>
    grayscale &&
    !selected &&
    `
    filter: grayscale(1);
  `}

  ${({ selected, backgroundColor }) =>
    selected &&
    `
    box-shadow: 0px 0px 12px 4px ${backgroundColor};
  `}
`;
