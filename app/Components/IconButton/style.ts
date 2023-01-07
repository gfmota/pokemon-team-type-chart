import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: #ff5757;
  border-radius: 50%;
  color: white;
  padding: 1em;
  cursor: pointer;
  transition: 0.5s;

  * {
    transition: inherit;
  }

  :hover {
    background-color: #e84f4f;
    > * {
      transform: scale(1.2);
    }
  }
`;
