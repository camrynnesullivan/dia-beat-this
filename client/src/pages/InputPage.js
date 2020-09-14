import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import InputGoalCard from "../components/InputComponents/InputGoalCard";
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard";
import InputA1CCard from "../components/InputComponents/InputA1CCard";
import InputPageGrid from "../components/InputComponents/InputPageGrid";
import SubmitDialog from "../components/InputComponents/SubmitDialog"
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: "center",
  },
  button: {},
});

function InputPage(props) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const [radioBS, setRadioBS] = React.useState(false);
  const [radioA1C, setRadioA1C] = React.useState(true);
  const [measurement, setMeasurement] = React.useState("");
  const [carbGoal, setCarbGoal] = useState("");
  const [calorieGoal, setCalorieGoal] = useState("");


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeasurement({
      [name]: value,
    });
  };

  const handleCarbInputChange = (event) => {
    const { name, value } = event.target;
    setCarbGoal(value);
  };

  const handleCalorieInputChange = (event) => {
    const { name, value } = event.target;
    setCalorieGoal(value);
  };

  const logBloodSugar = async () => {
    const { data } = await axios.post("/api/measurements", {
      enteredGlucose: parseInt(measurement.measurement),
      afterMeal: radioBS.valueOf(),
    });
    console.log(data);
  };

  const logA1C = async () => {
    console.log(measurement.measurement);
    const { data } = await axios.post("/api/A1Cmeasurements", {
      enteredA1C: parseInt(measurement.measurement)
    });
    console.log(data);
  };

  const logFoodGoal = async () => {
    console.log(carbGoal, calorieGoal);
    const { data } = await axios.post("/api/FoodGoal", {
      calorieGoal: carbGoal,
      carbGoal: calorieGoal,
    });
    console.log(data);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tab === 2) {
      logA1C();
    } else if (tab === 1) {
      logBloodSugar();
    } else {
      logFoodGoal();
    }
    setOpenDialog(true);
  };

  const handleRadio = (e) => {
    if (tab === 0) {
      // logFood():
    } else if (tab === 1) {
      setRadioBS(!radioBS);
    } else {
      setRadioA1C(!radioA1C);
    }
  };


  const handleChange = (event, newTabValue) => {
    setTab(newTabValue);
  };


  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <InputPageGrid>
      <CardContent>
        <Typography variant="subtitle" color="textSecondary" gutterBottom>
          Let's figure out your insulin!
        </Typography>
        <Typography variant="h5" component="h5">
          What would you like to track?
        </Typography>
      </CardContent>
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Food" />
          <Tab label="Blood Sugar" />
          <Tab label="A1C" />
        </Tabs>
        <InputGoalCard value={tab} index={0} handleCarbInputChange={handleCarbInputChange} handleCalorieInputChange={handleCalorieInputChange}/>
        <InputBloodSugarCard
          value={tab}
          index={1}
          handleRadio={handleRadio}
          handleInputChange={handleInputChange}
        />
        <InputA1CCard
          value={tab}
          index={2}
          radio={props.radio}
          handleRadio={handleRadio}
          handleInputChange={handleInputChange}
        />
      </Paper>
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
      <SubmitDialog tab={tab} measurement={measurement} openDialog={openDialog} handleDialogClose={handleDialogClose}/>
    </InputPageGrid>
  );
}

export default InputPage;
