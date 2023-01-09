import styled from "styled-components";

interface StyledPokemonIconProps {
  idNum: number;
}

export const StyledPokemonIcon = styled.div<StyledPokemonIconProps>`
  width: 40px;
  height: 30px;
  background: url(http://play.pokemonshowdown.com/sprites/pokemonicons-sheet.png) ${
    ({ idNum }) => idNum > 10000 ?
      '0 0' :
      `-${(idNum % 12) * 40}px -${Math.floor(idNum / 12) * 30}px`
  };
`
