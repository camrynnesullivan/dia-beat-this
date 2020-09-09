import React from "react"
import BloodSugarCard from "../components/BloodSugarCard"
import ChartCard from "../components/ChartCard"
import FoodSuggestedCard from "../components/FoodSuggestedCard"
import SymptomsCard from "../components/SymptomsCard"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}));

function ProgressPage(props) {
  const classes = useStyles();

  return (
        <div className={classes.root}>
<Grid
  container
  className={classes.gridContainer}
  direction="column"
  justify="center"
  alignItems="center"
  spacing={2}
>
    <Grid item xs={12} sm={6} md={4}>
        <BloodSugarCard />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
        <ChartCard />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
        <FoodSuggestedCard />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
        <SymptomsCard />
    </Grid>
  </Grid>
  </div>)
}

export default ProgressPage
