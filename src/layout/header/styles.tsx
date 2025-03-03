import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header<{$show: number}>`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  width: calc(100% - 2rem);
  height: auto;
  top: 0;
  padding: 1rem;
  
  background: white;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  transition: .3s;

  ${({$show}) => $show && `
    height: 40px;

    .menuwrap {
      display: block;

      .menu-icon {
        display: none;
      }

      .close-icon {
        display: block;
      }
    }

    nav {
      padding: 1rem;
      display: block;
      height: 100vh;
      width: calc(100% - 2rem);
      background: white;
      transition: .3s;

      position: absolute;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3) inset;
      top: 72px;

      animation: menu-transition .3s forwards;

      @keyframes menu-transition {
        0% {left: -100%;}
        100% {left: 0%;}
      }

      ul {
        flex-direction: column;
        margin-top: 48px;
        gap: 30px;

        li { width: 80px; }
      }
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  ul {
    display: flex;
    gap: 12px;
    margin: 0;
    li {
      list-style-type: none;
      padding-inline: 8px; 
      transition: .3s;

      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translate(0, -1px);
      }
      
      a {
        display: inline-flex;
        align-items: center;
        height: 48px;
        text-decoration: none;
        color: #606060;
        transition: .3s;
        svg {
          margin-left: 4px;
          transition: transform 250ms ease;
        }
        &:hover { color: #202020; }
        &:active { color: black; }
      }
    }
  }

  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const DropdownList = styled.li`
  &:hover {
    svg {
      transform: rotate(180deg);
    }
    ul {
      display: block;
    }
  }
  
  ul {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    animation-duration: 250ms;
    animation-timing-function: ease;

    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 0;
    margin-top: 48px;
    border-radius: 3px;
    background: white;
    &:hover { display: block }

    li {
      a {
        width: 100%;
        line-height: 32px;
        height: 32px;
      }
    }
  }
`;

export const HighlightList = styled.li`
  padding: 0;
  border-radius: 3px;
  background: var(--color-grey);
  cursor: pointer;
  &:hover, &:focus {background: #202020}
  &:active {background: black;}
  a {
    padding-inline: 8px;
    color: white !important;
  }
`;

export const MenuWrap = styled.div`
  display: none;

  @media all and (max-width: 767px) {
    display: block;
  }

  .menu-icon {
    color: var(--color-black);
    transition: .3s;
    font-size: 40px;
    cursor: pointer;
    &:hover { color: black;}
  }

  .close-icon {
    color: #34495e;
    transition: .3s;
    font-size: 40px;
    cursor: pointer;
    &:hover { color: black;}

    display: none;
  }
`;

export const LogoWrap = styled(Link)`
  text-decoration: none;
  color: #606060;

  position: relative;
  width: 260px;
  height: 60px;

  img {
    transition: .3s;
    object-fit: cover;
  }

  @media all and (max-width: 767px) {
    width: 195px;
    height: 45px;
  }

  &:hover {
    img {
      filter: brightness(0.5) grayscale(1);
    }
  }
  &:active {
    img {
      filter: brightness(0) grayscale(1);
    }
  }
`;

export const SignIn = styled.div`

`;

export const ContinueWithEmailButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 1rem;
  border: 1px solid var(--color-grey);
  border-radius: 3px;
  background: white;
  color: var(--color-grey);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 48px;
  height: 48px;
  color: #606060;
  width: 100%;
  transition: .1s;
  svg {
    margin-right: 4px;
  }
  &:hover { color: #202020; }
  &:active { color: black; }
`;

export const SignUpWrap = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid var(--color-divider);

  a {
    cursor: pointer;
    color: var(--color-primary);
    text-decoration: underline;
    transition: .3s;
    font-weight: bold;
    &:hover { color: #202020; }
    &:active { color: black; }
  }

`;
