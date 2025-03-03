import styled from "styled-components";

export const GridDotsBackground = styled.section`
  background: white;
  background-image: radial-gradient(var(--color-divider) 8%, transparent 0);
  background-size: 30px 30px;
  background-attachment: fixed;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export const SolidBackground = styled.section`
  background: white;
  max-width: 1200px;
  margin-inline: auto;
  padding: 1rem;
`;

export const Intro = styled.div`
  max-width: 800px;
  text-align: center;
  margin-inline: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const PricingWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 4rem;
  padding-top: 4rem;

  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlanBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid var(--color-divider);
  border-radius: 3px;
  padding: 2rem;
  width: calc(100% - 4rem);
  max-width: 250px;

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
    &:hover { color: #202020; transform: translate(0, -1px); }
    &:active { color: black; }
  }
  
  p {
    margin-top: 0;
    span {
      color: black;
      &:first-child {
        font-weight: bold;
        font-size: 36px;
      }
    }
  }
`;

