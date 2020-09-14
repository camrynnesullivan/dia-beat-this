import React, { useState, useEffect } from "react";

import BloodSugarCard from "../components/BloodSugarCard";
import CardGrid from "../components/CardGrid";
import WarningCard from "../components/WarningComponents/WarningCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import A1CCard from "../components/A1CCard";
import API from "../utils/API";
import ChartCard from "../components/ChartComponents/ChartCard";
import ChartCardAC1 from "../components/ChartComponents/ChartAC1";
import { treatingHBS, treatingLBS } from "../research";
import { symptomsLBS, symptomsHBS } from "../research";
import SymptomsCard from "../components/WarningComponents/SymptomsCard";
import axios from "axios";

function ProgressPage(props) {
  let lastLog;
  function getLoggedData() {
    const { data } = axios.get("api/measurements").then(function (res) {
      console.log(res.data[0]);
    });
    const { dataAc1 } = axios.get("/api/A1Cmeasurements").then(function (res) {
      console.log(res.AC1data[0]);
    });
  }
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

  const [bloodSugar, setBloodSugar] = useState(180);
  const [afterMeal, setAfterMeal] = useState(true);
  const [AC1Data, setAC1Data] = useState({
    labels: [],
    data: [],
  });
  const [storedData, setStoredData] = useState({
    labels: [],
    data: [],
  });
  const [times, setTimes] = useState([]);

  // Hooks rendering the appropiate cards based on blood sugar range
  const [level, setLevel] = useState(normal);

  const setLevels = (res) => {
    const timesArray = [];
    const measurements = [];
    const AC1days = [];
    const AC1measurements = [];

    setBloodSugar(res.data[res.data.length - 1].enteredGlucose);
    setAfterMeal(res.data[res.data.length - 1].afterMeal);
    for (let index = 0; index < res.data.length; index++) {
      if (res.data[index].date) {
        const date = res.data[index].date.substr(5, 5);
        const dateTime = date + " - " + res.data[index].date.substr(11, 5);
        timesArray.push(dateTime);
      }
      if (res.data[index].enteredGlucose) {
        measurements.push(res.data[index].enteredGlucose);
      }
    }

    for (let index = 0; index < res.dataAc1.length; index++) {
      if (res.dataAc1[index].date) {
        const day = res.dataAc1[index].date.substr(5, 5);
        AC1days.push(day);
      }
      if (res.dataAc1[index].enteredA1C) {
        AC1measurements.push(res.dataAc1[index].enteredA1C);
      }
    }
    setTimes(timesArray);

    setStoredData({
      labels: timesArray,
      data: measurements,
    });
    setAC1Data({
      labels: AC1days,
      data: AC1measurements,
    });
    console.log(AC1days);
    console.log(AC1measurements);
    console.log(measurements);
    console.log(times);

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
      .then((res) => setAC1Data(res.data[res.data.length - 1].enteredA1C))
      .catch((err) => console.log(err));
  }, [A1C]);

  return (
    <CardGrid>
      {/* // Play with these values to see how they render appropriately! Delete this entire div once information is successfully being retrieved from database */}
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal} />
      <ChartCard labels={storedData.labels} data={storedData.data} />

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
      <ChartCard labels={AC1Data.labels} data={AC1Data.data} />
      <FoodTrackCard />

      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
