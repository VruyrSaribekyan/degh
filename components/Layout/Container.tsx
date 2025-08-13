import React from 'react'
import styled, { css } from 'styled-components'

interface Style {
  zIndex?: string
}

interface Props extends Style {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Container = ({ children, zIndex, style }: Props) => (
  <StyledContainer zIndex={zIndex} style={style}>
    {children}
  </StyledContainer>
)

const StyledContainer = styled.div<Style>`
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1170px;
  @media ${({ theme }) => theme.devices.mobileLgUp} {
    max-width: 1284px;
    padding: 0 30px;
  }
  ${({ zIndex }) => {
    if (zIndex) {
      return css`
        z-index: ${zIndex};
      `
    }
  }}
`

export default Container
