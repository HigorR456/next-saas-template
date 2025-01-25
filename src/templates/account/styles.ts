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

export const AccountWrap = styled.div`
  h1 { text-align: center; }
  p { text-align: center; }
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const BillingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 1px solid var(--color-divider);
  border-radius: 3px;
  padding: 2rem;
  max-width: 767px;
  width: 100%;
  margin-inline: auto;
  text-align: left;
  p { text-align: left; }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-divider);
    padding: 1rem;
    border-radius: 3px;

    h3 {
      margin-right: 2rem;
    }
  }
`;

export const HighlightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-divider);
  padding: 1rem;
  border-radius: 3px;
`;

export const Button = styled.button`
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
  max-width: fit-content;
  padding-inline: 1rem;
  transition: .1s;
  div {
    padding-inline: 1.5rem;
  }
  &:hover { color: #202020; }
  &:active { color: black; }
`;
