import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  section {
    padding: 1rem;
    margin-bottom: 3rem;
  }
`;

export const Intro = styled.div`
  max-width: 800px;
  text-align: center;
  margin-inline: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const PlanBox = styled.div`
  border: 1px solid var(--color-grey);
  border-radius: 3px;
  padding: 2rem;
  width: fit-content;

  a {
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
  }
  
  p {
    span {
      color: black;
      &:first-child {
        font-weight: bold;
        font-size: 36px;
      }
    }
  }
`;

