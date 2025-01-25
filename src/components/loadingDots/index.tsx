"use-client"
import * as Style from "./styles"

export default function LoadingDots({ size }: { size: number }) {
  return (
    <Style.LoadingWrap $size={size}>
      <span />
      <span />
      <span />
    </Style.LoadingWrap>
  )
} 