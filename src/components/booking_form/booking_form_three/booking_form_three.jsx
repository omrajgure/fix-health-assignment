import React from "react";
import styles from "./booking_form_three.module.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeCustom } from "../../theme/theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const Booking_form_three = ({
  age,
  complaints,
  handleComplaints,
  experience,
  handleRadioChange,
}) => {
  return (
    <div>
      <div className={styles.progressDiv}>
        <div className={styles.progressBar}></div>
        <div className={styles.progressValue}>3 of 3</div>
      </div>
      <h2>Discover Your Ideal Physiotherapist</h2>
      <div style={{ marginBottom: "0.5rem" }}>
        <ThemeProvider theme={ThemeCustom}>
          <TextField
            id="standard-multiline-static"
            label="Chief complaints"
            multiline
            rows={3}
            variant="standard"
            value={complaints}
            onChange={handleComplaints}
            fullWidth={true}
          />
        </ThemeProvider>
      </div>

      {age >= 40 && (
        <div>
          <h4>Any previous experience with physiotherapy ?</h4>
          <ThemeProvider theme={ThemeCustom}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={experience}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};
