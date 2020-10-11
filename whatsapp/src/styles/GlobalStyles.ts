import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #D2DBDC;
    font-family: 'Segoe UI', Helvetica Neue, Arial, Helvetica, sans-serif, Lucida Grande, Arial, sans-serif;
  }

  h1, h2, strong, span, p {
    color: rgba(241, 241, 242, 0.88);
  }

  :root {
    --primary: #fff;
    --black: #000;
    --blue: #58c6f4;
    --background-default: #f6f6f6;

    --button-color: #919191;
    --border: #f2f2f2;
    --header: #ededed;
    --gray: #999;

    --scroll: hsla(0,0%,100%,.16);
  }
`
