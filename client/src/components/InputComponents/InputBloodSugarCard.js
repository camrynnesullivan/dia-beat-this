import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputFormGrid from "./InputFormGrid";

const useStyles = makeStyles((theme) => ({
  formElements: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
}));

export default function InputBloodSugar(props) {
  const classes = useStyles();

  return (
    <div
    role="tabpanel"
    hidden={props.value !== props.index}
    id={`simple-tabpanel-${props.index}`}
    aria-labelledby={`simple-tab-${props.index}`}
    {...props.other}
  >
    <InputFormGrid>
      <FormGroup className={classes.formElements}>
        <FormLabel component="legend">When are you measuring?</FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="before"
          onChange={props.handleRadio}
        >
          <FormControlLabel
            value="before"
            control={<Radio color="primary" />}
            label="Before Food"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="after"
            control={<Radio color="primary" />}
            label="After Food"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormGroup>

      <FormGroup className={classes.formElements} noValidate autoComplete="off">
        <FormLabel>What is your before measurement?</FormLabel>
        <TextField
          id="filled-basic"
          name="measurement"
          label="Ex. 180"
          variant="filled"
          onChange={props.handleInputChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
          }}
        />
      </FormGroup>

    </InputFormGrid>

    </div>
    
  );
}
