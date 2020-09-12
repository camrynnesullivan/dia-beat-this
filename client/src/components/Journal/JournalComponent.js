
import React, { useRef useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import Journal from "../../utils/Journal";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function CreatePostForm() {
    
    const bodyRef = useRef();

    const [state, dispatch] = useStoreContext();
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: LOADING });
      Journal.savePost({
       
        body: bodyRef.current.value,
        
      })
        .then(result => {
          dispatch({
            type: ADD_POST,
            post: result.data
          });
        })
        .catch(err => console.log(err));
  
      
      bodyRef.current.value = "";
    };



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export default function JournalPage() {
    const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };
    return (
        <CardGrid>
            <Card>
                <form className={classes.container} noValidate>
                    {/* Date and Time */}
                    <TextField
                        id="datetime-local"
                        label="Enter the Date and Time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    {/* Multiline textbox */}
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                </form>
            </Card>
        </CardGrid>
    )
}