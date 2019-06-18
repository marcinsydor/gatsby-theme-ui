import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider = styled.ul`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Slide = styled.li`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition-property: opacity;
  transition-duration: 1s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const Button = styled.li`
  position: absolute;
  background-color: ${({ theme }) => theme.pColor};
  background-repeat: no-repeat;
  background-position: center center;
  width: 40px;
  height: 40px;
  top: calc(50% - 20px);
  z-index: 999;
  cursor: pointer;
  background-image: url("../images/left-icon.svg");

  &:hover {
    background-color: ${({ theme }) => theme.slColor};
  }

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      right: 0;
      background-image: url("../images/right-icon.svg");
    `}
`;
