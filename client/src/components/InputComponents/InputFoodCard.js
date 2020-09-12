import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputFormGrid from './InputFormGrid';

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
    axios({
      "method":"GET",
      "url":"https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"nutritionix-api.p.rapidapi.com",
      "x-rapidapi-key":"6c45312c83msh64109d7b4df795dp1feb3bjsn924eea0bc390",
      "useQueryString":true
      },"params":{
      "fields":"item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat"
      }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
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