import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styled from "styled-components";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
`;

export default function Form() {
  return (
    <Box>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={8}>
          <Typography component="h5" variant="h5">
            Form Demo
          </Typography>
          <TextField
            id="outlined-basic"
            label="Text Input"
            fullWidth
            variant="outlined"
          />
          <Typography
            component="h6"
            variant="h6"
            sx={{ color: "gray", fontSize: "14px" }}
          >
            Radio Input
          </Typography>
          <CheckboxDiv>
            <FormControlLabel control={<Checkbox />} label="Radio Option 1" />
            <FormControlLabel control={<Checkbox />} label="Radio Option 2" />
          </CheckboxDiv>
        </Grid>
      </Grid>
    </Box>
  );
}
