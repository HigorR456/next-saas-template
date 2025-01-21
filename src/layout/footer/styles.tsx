import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1rem;
  margin-top: auto;
  margin-bottom: 0;

  background: var(--color-black);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 200px;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .logo-wrap {
    margin-bottom: 25px;

    position: relative;
  }
  .links {
    margin-bottom: 25px;

    a {
      display: inline-block;
      height: 48px;
      line-height: 48px;
    }

    @media all and (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }

    .footer-link {
      color: rgba(255,255,255,0.6);
      &:hover { color: white; }
      text-decoration: none;
      padding-inline: 10px;
    }
  }
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  
  .legal-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 20px;
    color: white;

    .copyright {
      padding-right: 5px;
      margin-top: 2px;
      margin-bottom: auto;
    }

    @media all and (max-width: 767px) {
      width: 220px;
    }
  }
  
  .legal-links {
    a {
      color: rgba(255,255,255,0.6);
      &:hover { color: white; }
      cursor: pointer;
      padding-inline: 10px;
    }

    @media all and (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
