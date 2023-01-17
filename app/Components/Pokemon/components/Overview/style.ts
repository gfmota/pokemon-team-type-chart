import styled from 'styled-components';
import { MOBILE_MAX_WIDTH } from '../../../../constants';
import { FlexBox } from '../../../../style';

export const StyledOverviewWrapper = styled(FlexBox)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  height: calc(100vh - 14em);
  width: calc(100vw - 14em);
  margin: 5em;
  padding: 2em;
  border-radius: 2em;

  background-color: #807d7b;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-size: 1.2em;
  font-weight: bold;

  align-items: flex-start;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledCanva = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);
`;
