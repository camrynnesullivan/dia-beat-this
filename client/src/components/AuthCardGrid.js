import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  gridContainer: {
    padding: "40px",
  }
}));

function AuthCardGrid(props) {
  const classes = useStyles();

  return (
    <Paper>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.gridContainer}
    >
    <Typography variant="h4">{props.header}</Typography>
        <form className={classes.form} onSubmit={props.handle}>
          <Grid item>{props.children}</Grid>
        </form>
        </Grid>
    </Paper>
  );
}

export default AuthCardGrid;
