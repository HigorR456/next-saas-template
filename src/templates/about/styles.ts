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
  margin-inline: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;

  h1 {
    text-align: center;
  }
  h2 {
    margin-top: 2rem;
  }
  p {
    margin-inline: 3.5rem;
  }
  ul {
    margin-inline: 2.5rem;
  }

  @media all and (max-width: 767px) {
    text-align: center;
    h1, h2, p, ul {
      margin-inline: 0;
    }
  }
`;

