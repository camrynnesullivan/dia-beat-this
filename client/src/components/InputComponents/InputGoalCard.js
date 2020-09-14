import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputFormGrid from './InputFormGrid';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
  root: {
  },
  formElements: {
    padding: 10,
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
                  onChange={props.handleCalorieInputChange}
                  label="2000" 
                  variant="filled"          
                />
              </FormGroup>
              <FormGroup className={classes.formElements} noValidate autoComplete="off" >
                   <FormLabel>Carb Goal:</FormLabel>
                    <TextField 
                      id="filled-basic" 
                      name="carbGoal"
                      onChange={props.handleCarbInputChange}
                      label="250" 
                      variant="filled"          
                      InputProps={{
                        endAdornment: <InputAdornment position="end">g</InputAdornment>,
                      }}
                    />
              </FormGroup>
          </InputFormGrid>
</div>
)
}