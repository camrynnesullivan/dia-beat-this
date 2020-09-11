import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
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
  const [state, setState] = useState({
    foods: [],
    q: ""
  })
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  const getFood = () => {
    axios.get("https://nutritionix-api.p.rapidapi.com/v1_1/search/" + this.state.q)
      .then(res =>
        {console.log(res.data);
        this.setState({
          foods: res.data
        })}
      )
      .catch(() =>
        this.setState({
          foods: []
        })
      );
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    this.getFood();
  };

  return (
<InputFormGrid>
      <FormGroup className={classes.formElements} noValidate autoComplete="off" onChange={handleInputChange} onSubmit={handleFormSubmit} value={state.q}>
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