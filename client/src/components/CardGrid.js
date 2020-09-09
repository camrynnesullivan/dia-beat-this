import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  gridContainer: {
    marginTop: "20px",
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}));

function CardGrid(props) {
  const classes = useStyles();

  return (
<Grid
  container
  className={classes.gridContainer}
  direction="column"
  justify="center"
  alignItems="center"
  spacing={2}
>
    <Grid item xs={12} sm={6} md={4}>
    {props.children}
    </Grid>
</Grid>
  );
}

export default CardGrid;
