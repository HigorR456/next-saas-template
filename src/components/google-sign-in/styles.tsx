import styled from "styled-components";

export const SignInButton = styled.button`
  all: unset;
  cursor: pointer;
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