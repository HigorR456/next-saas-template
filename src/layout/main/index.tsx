'use client';
import * as Style from './styles';

export default function Main({children}: any) {
  return (
    <Style.Main>
      <Style.Wrapper>
        {children}
      </Style.Wrapper>
    </Style.Main>
  )
}
