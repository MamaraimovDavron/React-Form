import React from "react";
import { useState } from "react";
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
  const [text, setText] = useState("");
  const [radio, setRadio] = useState("female");
  const [select, setSelect] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const [slider, setSlider] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(text);
    console.log(radio);
    console.log(select);
    console.log(date);
    console.log(check);
    console.log(slider);
  };

  const reset = () => {
    setText("");
    setRadio("");
    setDate("");
    setSelect("");
    setCheck("");
    setSlider("");
  };

  return (
    <Box component={"form"} onSubmit={submit}>
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
            // id="outlined-basic"
            label="Text Input"
            fullWidth
            variant="outlined"
            value={text}
            type={text}
            required
            error={text.length <= 2 ? true : false}
            onChange={(e) => setText(e.target.value)}
          />

          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ color: "gray", fontSize: "14px" }}
            >
              Radio Input
            </FormLabel>
            <RadioGroup
              defaultValue={radio}
              onChange={(e) => setRadio(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                label="Radio Option 1"
                value="female"
              />
              <FormControlLabel
                control={<Radio />}
                label="Radio Option 2"
                value="male"
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
              value={select}
              onChange={(e) => setSelect(e.target.value)}
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
              <TextField
                label="1.23.24"
                fullWidth
                value={date}
                required
                error={date.length < 3 ? true : false}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarMonthIcon sx={{ position: "absolute", right: "10px" }} />
            </Field>
          </Box>

          <FormGroup fullWidth>
            <Typography sx={{ fontSize: "13px", margin: "10px 0" }}>
              Checkbox Input
            </Typography>
            <FormControlLabel
              label="Checkbox Option 1"
              control={
                <Checkbox
                  checked={!check}
                  onChange={(e) => setCheck(!e.target.value)}
                />
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  label="Checkbox Option 2"
                  checked={check}
                  onChange={(e) => setCheck(e.target.value)}
                />
              }
              value={check}
              label="Checkbox Option 2"
              onChange={(e) => setCheck(e.target.value)}
            />
          </FormGroup>

          <Box sx={{ width: "100%", fontSize: "13px", margin: "20px 0" }}>
            <Typography>Slider Input</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </Box>

          <Box>
            <Button
              fullWidth
              variant="secondary"
              sx={{ margin: "10px 0", background: "#DFE0DF" }}
              type="submit"
            >
              Submit
            </Button>
            <Button
              fullWidth
              variant="secondary"
              sx={{ margin: "10px 0", background: "#DFE0DF" }}
              onClick={reset}
            >
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
