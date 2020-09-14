import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputFormGrid from './InputFormGrid';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function InputGoalCard(props) {
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


  const handleFormSubmit = event => {
    event.preventDefault();
    // getFood();
  };

  return (
        <div
            role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}
            {...props.other}
          >
          <InputFormGrid>
                <FormGroup className={classes.formElements} noValidate autoComplete="off" >
                <FormLabel>Calorie Goal:</FormLabel>
          <TextField 
            id="filled-basic" 
            name="calorieGoal"
            onChange={props.handleCalorieGoalInputChange}
            label="2000" 
            variant="filled"          
            // InputProps={{
            //   endAdornment: <InputAdornment position="end">%</InputAdornment>,
            // }}
          />
                   <FormLabel>Carb Goal:</FormLabel>
          <TextField 
            id="filled-basic" 
            name="carbGoal"
            onChange={props.handleCarbsGoalInputChange}
            label="250" 
            variant="filled"          
            // InputProps={{
            //   endAdornment: <InputAdornment position="end">%</InputAdornment>,
            // }}
          />
                    </FormGroup>
                  <FormGroup>
                </FormGroup>
          </InputFormGrid>
</div>
)
}