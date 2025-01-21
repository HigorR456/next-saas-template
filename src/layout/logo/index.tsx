import { LogoWrap } from "./styles"

export const Logo = ({light = false}) => {
  return (
    <LogoWrap href="/" $light={light}>
      <h2>next-saas-template</h2>
    </LogoWrap>
  )
}