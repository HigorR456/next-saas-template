import styled from "styled-components";

export const LoadingWrap = styled.div<{$size: number}>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  span {
    border-radius: 100%;
    border: ${({ $size }) => $size}px solid var(--color-grey);
    margin: ${({ $size }) => $size * 2}px;

    &:nth-child(1) {
      animation: preloader 0.6s ease-in-out alternate infinite;
    }
    &:nth-child(2) {
      animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
    }

    &:nth-child(3) {
      animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
    }
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;