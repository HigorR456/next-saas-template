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

export const CredentialsFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 5px;
  padding: 0.4rem 0 1.6rem; 

  h2 {
    text-align: center;
  }

  button {
    max-width: initial;
    width: initial;
  }

  label {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: bold;
    line-height: 30px;

    span {
      color: var(--color-error);
      font-size: 0.8rem;
    }

    small {
      font-weight: normal;
      color: var(--color-grey);
      line-height: initial;
    }
  }
`;

export const ShowPasswordWrap = styled.div`
  margin-top: 0.5rem;
  
  input {
    min-height: unset;
    cursor: pointer;
  }
`;
