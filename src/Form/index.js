import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Box,
  FormLabel,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  // SelectChangeEvent,
  RadioGroup,
  Radio,
  InputLabel,
  FormGroup,
  Slider,
  Button,
} from "@mui/material";

import styled from "styled-components";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export default function Form() {
  const [value, setValue] = React.useState("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
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
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              // aria-labelledby="demo-controlled-radio-buttons-group"
              // name="controlled-radio-buttons-group"
              value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Radio Option 1"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Radio Option 2"
              />
            </RadioGroup>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              Dropdown Input
            </Typography>
            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Date Input</Typography>
            <Field>
              <TextField label="23-Jul-21" fullWidth />
              <CalendarMonthIcon sx={{ position: "absolute", right: "10px" }} />
            </Field>
          </Box>

          <FormGroup fullWidth>
            <Typography sx={{ fontSize: "13px", margin: "10px 0" }}>
              Checkbox Input
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Checkbox Option 1"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Checkbox Option 2"
            />
          </FormGroup>

          <Box sx={{ width: "100%", fontSize: "13px", margin: "20px 0" }}>
            <Typography>Slider Input</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Box>
          <Box>
            <Button
              fullWidth
              variant="secondary"
              sx={{ margin: "10px 0", background: "#DFE0DF" }}
            >
              Submit
            </Button>
            <Button
              fullWidth
              variant="secondary"
              sx={{ margin: "10px 0", background: "#DFE0DF" }}
            >
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
