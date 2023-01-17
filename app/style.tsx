import styled from 'styled-components';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from './constants';

interface FlexBoxProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: number;
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ gap }) => gap && `gap: ${gap}px`};
`;

export const FlexColumn = styled.div<Omit<FlexBoxProps, 'direction'>>`
  display: flex;
  flex-direction: column;
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ gap }) => gap && `gap: ${gap}px`};
`;

export const TeamStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: ${TABLET_MAX_WIDTH}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 25px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    grid-template-columns: 1fr;
  }
`;

export const TypeRelationsStyled = styled(FlexBox)`
  justify-content: space-evenly;
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

export const AutocompleteStyled = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;

  position: absolute;
  top: 40px;

  background-color: white;
  color: black;
  width: 30%;
  min-width: 20em;
  z-index: 1;

  li {
    padding: 0.5rem;
  }

  li:hover {
    background-color: #ff5757;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;

export const FooterStyled = styled(FlexBox)`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5em 0;

  background-color: #333333;

  justify-content: end;
`;
