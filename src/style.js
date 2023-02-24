import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
`
export default GlobalStyle;
