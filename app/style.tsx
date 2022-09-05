import styled from 'styled-components'

type TypeLayoutIProps = {
  backgroundColor: string,
}

export const TypeLayout = styled.div<TypeLayoutIProps>`
  background-color: ${props => props.backgroundColor};
  border-radius: 100%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokemonLayout = styled.div`
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
