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
                      <FormLabel>What did you eat?</FormLabel>
                        <TextField onChange={handleInputChange} value={state.q} id="filled-basic" label="Food" variant="filled"/>

                    </FormGroup>
                  <FormGroup>
                </FormGroup>
          </InputFormGrid>
</div>
)
}