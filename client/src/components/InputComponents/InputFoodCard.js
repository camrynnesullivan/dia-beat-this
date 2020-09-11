import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputFormGrid from './InputFormGrid';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function InputFoodCard(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false)
  
  const handleChange = (event) => {
    setState(!state);
  };

  return (
<InputFormGrid>
      <FormGroup className={classes.formElements} noValidate autoComplete="off">
         <FormLabel>What did you eat?</FormLabel>
          <TextField id="filled-basic" label="Food" variant="filled"/>
          <TextField id="filled-basic" variant="filled" InputProps={{
            endAdornment: <InputAdornment position="end">servings</InputAdornment>,
          }}/>
      </FormGroup>
      <FormGroup>
      </FormGroup>
</InputFormGrid>

)
}