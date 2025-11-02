import styled, { keyframes } from "styled-components";
import { colors } from "./GlobalStyle";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Loader = styled.div`
  width: 60px;
  height: 60px;
  margin: 3rem auto;
  border: 4px solid ${colors.borderLight};
  border-top-color: ${colors.tertiary};
  border-right-color: ${colors.secondary};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${colors.primary};
    border-radius: 50%;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;
