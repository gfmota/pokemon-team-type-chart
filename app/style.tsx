import styled from 'styled-components'

type TypeStyledIProps = {
  backgroundColor: string,
}

export const TypeStyled = styled.div<TypeStyledIProps>`
  background-color: ${props => props.backgroundColor};
  border-radius: 100%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokemonStyled = styled.div`
  border-radius: 100%;
  background-color: #807d7b;
  color: white;

  width: 192px;
  height: 192px;
  padding-top: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;
`

export const InputStyled = styled.input`
  width: 30%;
  min-width: 20em;
  padding: 12px 20px;
  margin: 8px 4px;
  box-sizing: border-box;
`
