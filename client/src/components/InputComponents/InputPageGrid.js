import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  root: {

    justifyContent: 'center',
    paddingBottom: 10
  },
});


function InputPageGrid(props) {
  const classes = useStyles()

  return (
    <Card>
            <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
    className={classes.root}
  >
            {props.children.map((element, index) => (
                <Grid item key={index}>{element}</Grid>
                ))}     

  </Grid>
  </Card>
  )
}

export default InputPageGrid
