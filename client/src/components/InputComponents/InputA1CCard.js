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
      {!radio ?  
      <FormGroup className={classes.formElements} noValidate autoComplete="off">
         <FormLabel>What is your before measurement?</FormLabel>
          <TextField id="filled-basic" label="Before Measurement" variant="filled"          InputProps={{
            endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
          }}/>
      </FormGroup>
      :       <FormGroup className={classes.formElements} noValidate autoComplete="off">
      <FormLabel>What is your after measurement?</FormLabel>
       <TextField id="filled-basic" label="After Measurement" variant="filled" InputProps={{
         endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
       }}/>
   </FormGroup>}
</InputFormGrid>
)
}