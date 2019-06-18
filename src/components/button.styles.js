import styled from "styled-components";

export const StyledWarpper = styled.a`
  background: ${({ theme }) => theme.pColor};
  color: ${({ theme }) => theme.sColor};
  padding: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: pink;
  }
`;
