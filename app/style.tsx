import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from './constants'

type TypeStyledIProps = {
  backgroundColor: string,
  selected: boolean,
  grayscale: boolean,
}

export const TypeStyled = styled.div<TypeStyledIProps>`
  background-color: ${props => props.backgroundColor};
  border-radius: 100%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 0;

  transition: .7s;
  ${({grayscale}) => grayscale && `
    filter: grayscale(1);
  `}

  ${({selected, backgroundColor}) => selected && `
    box-shadow: 0px 0px 12px 4px ${backgroundColor};
  `}
`

type PokemonStyledIProps = {
  grayscale: boolean,
  glow: boolean,
}

export const PokemonStyled = styled.div<PokemonStyledIProps>`
  border-radius: 100%;
  background-color: #807d7b;
  color: white;

  max-height: 250px;
  padding: 10px;
  margin: 0 0 10px 10px;
  gap: 5px;

  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;

  transition: .7s;
  ${({grayscale}) => grayscale && `
    filter: grayscale(1);
  `}

  ${({glow}) => glow && `
    box-shadow: 0px 0px 25px 0px #807d7b;
  `}
`

export const InputStyled = styled.input`
  width: 30vw;
  min-width: 20em;
  padding: 12px 20px;
  margin: 0px 4px;
  box-sizing: border-box;
`

export const TeamStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: ${TABLET_MAX_WIDTH}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 25px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

export const TypeRelationsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 25px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    width: 100%;
    background-color: #807d7b;
    border-top: black 3px solid;
    max-height: 50vh;
    overflow:auto;
  }
`

export const AutocompleteStyled = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;

  position: absolute;
  width: 30vw;
  min-width: 20em;
  background-color: white;
  color: black;

  li {
    padding: 0.5rem;
  }

  li:hover {
  background-color: #008f68;
  color: #fae042;
  cursor: pointer;
  font-weight: 700;
  }

  li:not(:last-of-type) {
  border-bottom: 1px solid #999;
  }
`