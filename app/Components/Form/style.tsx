import styled from 'styled-components';
import { FlexColumn } from '../../style';

export const InputContainerStyled = styled(FlexColumn)`
  width: 30%;
  min-width: 20em;
  margin-right: 4px;
`;

interface InputStyledProps {
  error?: boolean;
}

export const InputStyled = styled.input<InputStyledProps>`
  padding: 12px 20px;
  box-sizing: border-box;
  border: ${({ error }) => error && '2px red solid'};
`;
