import styled from 'styled-components';

const StyledButton = styled.button`
  :disabled {
    opacity: 0.4;
    cursor: none;
  }
  color: ${props => props.theme.primary};
`;

export { StyledButton };
