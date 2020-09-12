import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"
import InputA1CCard from "../components/InputComponents/InputA1CCard"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function InputPage(props) {
  const classes = useStyles();
  const [tab, setTab] =useState(0);

  const [radio, setRadio] = React.useState(false);
  const [measurement, setMeasurement] = React.useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeasurement({
      [name]: value,
    });
  };

  const logBloodSugar = () => {
    console.log(radio, measurement);
    // const glucoseData = { measurement, radio };
    // API.saveGlucose(glucoseData).then((res) => console.log(res.data));
  };

  const logA1C = () => {
    console.log(radio, measurement);
    // const glucoseData = { measurement, radio };
    // API.saveGlucose(glucoseData).then((res) => console.log(res.data));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tab === 0) {
      // logFood():
    } else if (tab === 1) {
      logBloodSugar();
    } else {
      logA1C();
    }
    
  };

  const handleRadio = (e) => {
    setRadio(!radio);
  };



  const handleChange = (event, newTabValue) => {
    setTab(newTabValue);
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
              value={tab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Food"/>
              <Tab label="Blood Sugar"/>
              <Tab label="A1C"/>
            </Tabs>
            <InputFoodCard value={tab} index={0}/>
            <InputBloodSugarCard value={tab} index={1} handleRadio={handleRadio} handleInputChange={handleInputChange}/>
            <InputA1CCard value={tab} index={2} handleRadio={handleRadio} handleInputChange={handleInputChange}/>
            <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
      </Paper>
      </Card>
      )
}

export default InputPage
