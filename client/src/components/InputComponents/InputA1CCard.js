import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import InputFormGrid from "./InputFormGrid"

const useStyles = makeStyles((theme) => ({
  formElements: {
    padding: 10
  },
}));

export default function InputA1CCard(props) {
  const classes = useStyles();
  const [radio, setRadio] = React.useState(false)
  
  const handleRadio = (e) => {
    setRadio(!radio);
  };

  return (
    <InputFormGrid>
        <FormGroup className={classes.formElements}>
            <FormLabel component="legend">Do you know your A1C number?</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="Yes" onChange={handleRadio}>
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
                labelPlacement="bottom"
              />
                  <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
                labelPlacement="bottom"
              />
            </RadioGroup>
      </FormGroup>
      {!radio ?  
      // Option 1: I know my A1C number
      <FormGroup className={classes.formElements} noValidate autoComplete="off">
         <FormLabel>What is your A1C number?</FormLabel>
          <TextField 
            id="filled-basic" 
            label="A1C number" 
            variant="filled"          
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
      </FormGroup>
      
      :       
      
      // Option 2: I do not know my A1C number, but know my eAG (blood sugar level)
      <FormGroup className={classes.formElements} noValidate autoComplete="off">
      <FormLabel>Enter your eAG (blood sugar level) and we'll help you find out your A1C</FormLabel>
          <TextField 
              id="filled-basic" 
              label="eAG number" 
              variant="filled" 
              InputProps={{
                endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
              }}
          />
      </FormGroup>}
    </InputFormGrid>
<<<<<<< HEAD

=======
>>>>>>> 4b9009dfdb9939a755f092a0980c0a3d3734be87
)
}