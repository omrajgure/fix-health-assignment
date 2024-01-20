import React from "react";
import styles from "./booking_form_two.module.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeCustom } from "../../theme/theme";
export const Booking_form_two = ({
  age,
  city,
  company,
  handleAge,
  handleCity,
  handleCompany,
}) => {
  return (
    <div>
      <div className={styles.progressDiv}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressValue}>2 of 3</div>
      </div>
      <h2>Help us understand you better</h2>
      <div className={styles.inputwrapper}>
        <ThemeProvider theme={ThemeCustom}>
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            onChange={handleAge}
            value={age}
            fullWidth={true}
          />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            onChange={handleCity}
            value={city}
            fullWidth={true}
          />
          <TextField
            id="standard-basic"
            label="Company"
            variant="standard"
            onChange={handleCompany}
            value={company}
            fullWidth={true}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
