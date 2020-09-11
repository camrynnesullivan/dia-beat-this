import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from "@material-ui/core/Button"

import InputFormGrid from "./InputFormGrid"

const useStyles = makeStyles((theme) => ({
  formElements: {
    padding: 10
  },
  button: {
    marginTop: 10
  }
}));

export default function InputFoodCard(props) {
  const classes = useStyles();
  const [radio, setRadio] = React.useState(false)
  const [measurement, setMeasurement] = React.useState("")

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMeasurement({
      [name]: value
    });
  };

  const logMeasurement = () => {
    console.log(radio, measurement)
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    logMeasurement();
  };
  
const handleRadio = (e) => {
    setRadio(!radio);
  };

  return (
<InputFormGrid>
        <FormGroup className={classes.formElements}>
            <FormLabel component="legend">When are you measuring?</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="before" onChange={handleRadio}>
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
          <TextField id="filled-basic" name="measurement" label="Ex. 180" variant="filled" onChange={handleInputChange} InputProps={{
            endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
          }}/>
          <Button className={classes.button} type="submit" variant="contained" color="secondary" onClick={handleFormSubmit}>Submit</Button>
   </FormGroup>
</InputFormGrid>

)
}