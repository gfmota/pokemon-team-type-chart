import styled from 'styled-components';
import { MOBILE_MAX_WIDTH } from '../../constants';

export const StyledTypeRelationsWrapper = styled.div`
  margin: 0 25px 2.5em 25px;
  height: 100%;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0 0 2.1em 0;
    width: 100%;
    background-color: #807d7b;
    border-top: black 3px solid;
    max-height: 50vh;
    overflow: auto;
  }
`;

export const StyledTypeCounter = styled.div`
  border-radius: 100%;
  border: black 2px solid;
  padding: 0 5px;
  font-weight: bold;
  background-color: white;
  color: black;
`;
