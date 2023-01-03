import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: #FF5757;
  border-radius: 50%;
  color: white;
  padding: 1em;
  cursor: pointer;

  * {
    transition: .5s;
  }

  :hover {
    background-color: #e84f4f;
    > * {
      transform: scale(1.05);
    }
  }
`
