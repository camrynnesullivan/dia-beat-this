import React from "react"
import BloodSugarCard from "../components/BloodSugarCard"
import ChartCard from "../components/BloodSugarCard"
import FoodSuggestedCard from "../components/BloodSugarCard"
import SymptomsCard from "../components/BloodSugarCard"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function ProgressPage(props) {
  const classes = useStyles();

  return (
        <div className={classes.root}>
<Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  spacing={2}
>
    <Grid item>
        <BloodSugarCard />
    </Grid>
    <Grid item>
        <ChartCard />
    </Grid>
    <Grid item>
        <FoodSuggestedCard />
    </Grid>
    <Grid item>
        <SymptomsCard />
    </Grid>
  </Grid>
  </div>)
}

export default ProgressPage
