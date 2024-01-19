import React from "react";
import { useState } from "react";
import { Hero } from "./components/hero/hero";
import { Cards_grid } from "./components/cards_grid/cards_grid";
import { Testimonials } from "./components/testimonials/testimonials";
import { SnackbarProvider } from "notistack";
function App() {
  const [InCityDoctors, set_InCityDoctors] = useState("");

  return (
    <div>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Hero
          InCityDoctors={InCityDoctors}
          set_InCityDoctors={set_InCityDoctors}
        />
      </SnackbarProvider>
      <div id="result">
        {InCityDoctors && <Cards_grid InCityDoctors={InCityDoctors} />}
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
