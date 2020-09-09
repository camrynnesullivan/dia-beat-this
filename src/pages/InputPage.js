import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "@material-ui/core/Card"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const currencies = [
  {
    value: 'false',
    label: "I'm about to eat",
  },
  {
    value: 'true',
    label: 'I already ate',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function InputPage(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [value, setValue] = React.useState('female');

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div><TextField id="standard-basic" label="Standard" /></div>
      <div><TextField id="filled-basic" label="Filled" variant="filled" /></div>
      <div><TextField id="outlined-basic" label="Outlined" variant="outlined" /></div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="When are you measuring?"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <FormControl component="fieldset">
  <FormLabel component="legend">What would you like to track?</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="food" control={<Radio />} label="Food" />
    <FormControlLabel value="bloodSugar" control={<Radio />} label="Blood Sugar" />
  </RadioGroup>
</FormControl>
    </form>
  );
}

export default InputPage
