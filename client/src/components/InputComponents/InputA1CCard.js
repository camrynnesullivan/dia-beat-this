import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import InputFormGrid from "./InputFormGrid"

const useStyles = makeStyles((theme) => ({
  formElements: {
    padding: 10
  },
}));

export default function InputA1CCard(props) {
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
            <FormLabel component="legend">Do you know your A1C number?</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="Yes"  onChange={props.handleRadio}>
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
      {!props.radio ?  
      // Option 1: I know my A1C number
      <FormGroup className={classes.formElements} noValidate autoComplete="off">
         <FormLabel>What is your A1C number?</FormLabel>
          <TextField 
            id="filled-basic" 
            onChange={props.handleInputChange}
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
              onChange={props.handleInputChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
              }}
          />
      </FormGroup>}
    </InputFormGrid>
    </div>
)
}

InputA1CCard.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};