import {createGlobalStyle} from "styled-components"



const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
}

::before,::after{
    box-sizing: border-box;
}

body{
    line-height: 1.5;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
}

ul{
    list-style: none;
}


`

export default GlobalStyle;