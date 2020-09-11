import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function InputFoodCard(props) {
  const classes = useStyles();
  const [radio, setRadio] = React.useState(false)
  
  const handleRadio = (e) => {
    setRadio(!radio);
  };

  return (
    <Card>
  <FormControl component="fieldset">
      <FormLabel component="legend">When are you measuring?</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleRadio}>

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
      {radio ?  <h1>Before food questions</h1> : "after" && <h1>After food questions</h1>}
    </FormControl>
    </Card>

)
}