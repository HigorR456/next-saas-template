import Link from "next/link";
import styled from "styled-components";

export const LogoWrap = styled(Link)<{$light: boolean}>`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  
  h2 {
    margin: 0;
    color: black;
  }

  svg {
    font-size: 22px;
    color: black;
  }

  &:hover {
    color: var(--color-blue);
    h2 { color: var(--color-blue) }
    svg { color: var(--color-blue) }
  }

  ${({$light}) => $light && `
    color: white;
    h2 { color: white };
    svg { color: white };
  `};
`;