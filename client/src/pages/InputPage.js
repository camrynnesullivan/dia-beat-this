import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"
import InputA1CCard from "../components/InputComponents/InputA1CCard"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function InputPage(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
        <Card>
          <CardContent>
            <Typography variant="subtitle" color="textSecondary" gutterBottom>
              Let's figure out your insulin!
            </Typography>
              <Typography variant="h5" component="h5">
                What would you like to track?
              </Typography>
            </CardContent>
      <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Food"/>
              <Tab label="Blood Sugar"/>
              <Tab label="A1C"/>
            </Tabs>
            <InputFoodCard value={value} index={0}/>
            <InputBloodSugarCard value={value} index={1}/>
            <InputA1CCard value={value} index={2}/>
      </Paper>
      </Card>
      )
}

export default InputPage
