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
import { useForm } from "react-hook-form";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  const submit = (data) => {
    console.log(data);
  };

  const reset = () => {};

  return (
    <Box component={"form"} onSubmit={handleSubmit(submit)}>
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
            label="Text Input"
            fullWidth
            variant="outlined"
            {...register("Text Input", { required: true, maxLength: 20 })}
          />

          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ color: "gray", fontSize: "14px" }}
            >
              Radio Input
            </FormLabel>
            <RadioGroup defaultValue {...register("radio")}>
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
              {...register("select")}
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
                {...register("date", { required: true, maxLength: 10 })}
              />
              <CalendarMonthIcon sx={{ position: "absolute", right: "10px" }} />
            </Field>
          </Box>

          <FormGroup fullWidth {...register("checkbox")}>
            <Typography sx={{ fontSize: "13px", margin: "10px 0" }}>
              Checkbox Input
            </Typography>
            <FormControlLabel
              label="Checkbox Option 1"
              value={"checkbox1"}
              control={<Checkbox />}
            />

            <FormControlLabel
              control={<Checkbox />}
              value={"checkbox2"}
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
              {...register("slider")}
            />
          </Box>

          <Box>
            <Button
              fullWidth
              variant="secondary"
              sx={{ margin: "10px 0", background: "#DFE0DF" }}
              type="submit"
              onClick={onSubmit}
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
