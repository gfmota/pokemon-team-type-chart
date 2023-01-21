import styled from 'styled-components';

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
  width: calc(30% - 0.4em);
  min-width: 19.8em;
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

interface StyledPokemonIconProps {
  idNum: number;
}

export const StyledPokemonIcon = styled.div<StyledPokemonIconProps>`
  width: 40px;
  height: 30px;
  background: url(http://play.pokemonshowdown.com/sprites/pokemonicons-sheet.png)
    ${({ idNum }) =>
      idNum > 10000
        ? '0 0'
        : `-${(idNum % 12) * 40}px -${Math.floor(idNum / 12) * 30}px`};
`;
