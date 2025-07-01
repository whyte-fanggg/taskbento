import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

const theme = {
  colors: {
    softBlue: "#C8D8E1",
    sageGreen: "#D8E2C9",
    warmBeige: "#EDE3D1",
    goldenYellow: "#E4C29E",
    clayRose: "#D2A69E",
    background: "#FCFCF8",
  },
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
