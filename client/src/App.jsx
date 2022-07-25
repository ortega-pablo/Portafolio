import React from "react";
import Aside from "./Aside/Aside";
import { Main } from "./globalStyles/AppComponents";
import Home from "./Home/Home";
import { ThemeProvider } from "styled-components";
import Themes from "./globalStyles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Themes["light"]}>
        <Aside />
        <Main>
          <Home />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
