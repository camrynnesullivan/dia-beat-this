import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
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
    setState({
      [name]: value
    });
    console.log(state.q)
  };

  const getFood = () => {
    console.log("Working")
      fetch("https://nutritionix-api.p.rapidapi.com/v1_1/search/" + state.q + "?fields=item_name%252Citem_id%252Cbrand_name%252Cnf_calories%252Cnf_total_fat", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
          "x-rapidapi-key": "6c45312c83msh64109d7b4df795dp1feb3bjsn924eea0bc390"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getFood();
  };

  return (
<InputFormGrid>
      <FormGroup className={classes.formElements} noValidate autoComplete="off" >
         <FormLabel>What did you eat?</FormLabel>
          <TextField onChange={handleInputChange} value={state.q} id="filled-basic" label="Food" variant="filled"/>
          {/* <TextField id="filled-basic" variant="filled" InputProps={{
            endAdornment: <InputAdornment position="end">servings</InputAdornment>,
          }}/> */}
          <Button type="submit" variant="contained" color="secondary" onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
      <FormGroup>
      </FormGroup>

</InputFormGrid>

)
}