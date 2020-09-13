import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  root: {
    padding: 20
  }
})

export default function InputFormGrid(props) {
const classes = useStyles()
  return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
          <FormControl component="fieldset">
              {props.children.map((element, index) => (
                <Grid item key={index}>{element}</Grid>
                ))}     
          </FormControl>
      </Grid>

)
}