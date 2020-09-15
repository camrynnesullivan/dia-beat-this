import React, { useState, useEffect } from "react";
import BloodSugarCard from "../components/BloodSugarCard";
import CardGrid from "../components/CardGrid";
import WarningCard from "../components/WarningComponents/WarningCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import A1CCard from "../components/A1CCard";
import API from "../utils/API";
import ChartCard from "../components/ChartComponents/ChartCard";
import ChartCardA1C from "../components/ChartComponents/ChartCardA1C";
import { treatingHBS, treatingLBS } from "../research";
import { symptomsLBS, symptomsHBS } from "../research";
import SymptomsCard from "../components/WarningComponents/SymptomsCard";

function ProgressPage(props) {
  const low = {
    warning: "low",
    research: treatingLBS,
    symptoms: symptomsLBS,
  };
  const high = {
    warning: "high",
    research: treatingHBS,
    symptoms: symptomsHBS,
  };
  const normal = {
    warning: "normal",
  };
  // Last Measurement from database
  const [A1C, setA1C] = useState(9);
  const [bloodSugar, setBloodSugar] = useState(180);
  const [afterMeal, setAfterMeal] = useState(true);
  const [foodGoal, setFoodGoal] = useState({
    calorieGoal: 2000,
    carbGoal: 180,
  });
  const [foodCount, setFoodCount] = useState({
    calorieCount: 1250,
    carbCount: 80,
  });

  const [A1CData, setA1CData] = useState({
    labels: [],
    data: [],
  });
  const [storedData, setStoredData] = useState({
    labels: [],
    data: [],
  });
  // Hooks rendering the appropiate cards based on blood sugar range
  const [level, setLevel] = useState(normal);


  const setA1CChart = (res) => {
    setA1C(res.data[res.data.length - 1].enteredA1C)
    const A1Cdays = [];
    const A1Cmeasurements = [];
        for (let index = 0; index < res.data.length; index++) {
              if (res.data[index].enteredA1C) {
                A1Cmeasurements.push(res.data[index].enteredA1C);
                const day = res.data[index].date.substr(5, 5);
                A1Cdays.push(day);
              }
            }
          setA1CData({
            labels: A1Cdays,
            data: A1Cmeasurements,
          });
  }


  const setLevels = (res) => {
    setBloodSugar(res.data[res.data.length - 1].enteredGlucose);
    setAfterMeal(res.data[res.data.length - 1].afterMeal);
    const timesArray = [];
    const measurements = [];
    for (let index = 0; index < res.data.length; index++) {
      if (res.data[index].enteredGlucose) {
        measurements.push(res.data[index].enteredGlucose);
        const date = res.data[index].date.substr(5, 5);
        const dateTime = date + " - " + res.data[index].date.substr(11, 5);
        timesArray.push(dateTime);
      }
    }
    setStoredData({
      labels: timesArray,
      data: measurements,
    });

    if (!afterMeal) {
      if (bloodSugar < 80) {
        setLevel(low);
      } else if (bloodSugar > 130) {
        setLevel(high);
      } else {
        setLevel(normal);
      }
    } else {
      if (bloodSugar < 130) {
        setLevel(low);
      } else if (bloodSugar > 180) {
        setLevel(high);
      } else {
        setLevel(normal);
      }
    }
  };


  

  // These values must be set afer the database is reached.
  useEffect(() => {
    API.getSavedGlycemia()
      .then((res) => setLevels(res))
      .catch((err) => console.log(err));
  }, [afterMeal, bloodSugar]);

  useEffect(() => {
    API.getSavedA1C()
      .then((res) => setA1CChart(res))
      .catch((err) => console.log(err));
  }, [A1C]);

  useEffect(() => {
    API.getSavedFoodGoal()
      .then((res) => setFoodGoal({
        calorieGoal: res.data[res.data.length - 1].calorieGoal,
        carbGoal: res.data[res.data.length - 1].carbGoal}))
      .catch((err) => console.log(err));
  }, [foodGoal]);

  return (
    <CardGrid>
      {/* // Play with these values to see how they render appropriately! Delete this entire div once information is successfully being retrieved from database */}
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal} />
      <ChartCard labels={storedData.labels} data={storedData.data} />
      <ChartCardA1C labels={A1CData.labels} data={A1CData.data} />

      {level.warning !== "normal" && (
        <WarningCard
          level={level.warning}
          title={level.research.title}
          subtitle={level.research.subtitle}
          warning={level.research.warning}
          todos={level.research.todos}
        />
      )}
      {level.warning !== "normal" && (
        <SymptomsCard
          level={level.warning}
          title={level.symptoms.title}
          subtitle={level.symptoms.subtitle}
          summary={level.symptoms.summary}
          symptoms={level.symptoms.symptoms}
        />
      )}
      <A1CCard A1C={A1C} />
      <FoodTrackCard foodGoal={foodGoal} foodCount={foodCount}/>

      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
