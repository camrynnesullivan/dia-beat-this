import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "@material-ui/core/MenuItem"

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

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
    </form>
  );
}

export default InputPage
