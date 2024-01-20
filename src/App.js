import React from "react";
import { useState, useRef } from "react";
import { Hero } from "./components/hero/hero";
import { Cards_grid } from "./components/cards_grid/cards_grid";
import { Testimonials } from "./components/testimonials/testimonials";
import { SnackbarProvider } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const [InCityDoctors, set_InCityDoctors] = useState("");
  const [isFetching, set_isFetching] = useState(false);
  const myref = useRef();
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
          set_isFetching={set_isFetching}
          myref={myref}
        />
      </SnackbarProvider>
      <div id="result" ref={myref}>
        {isFetching && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Adjust the height as needed
            }}
          >
            <CircularProgress />
          </div>
        )}
        {!isFetching && InCityDoctors && (
          <Cards_grid InCityDoctors={InCityDoctors} />
        )}
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
