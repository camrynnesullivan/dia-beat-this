import React, { useState, useEffect, componentDidMount } from "react";

import BloodSugarCard from "../components/BloodSugarCard";

import CardGrid from "../components/CardGrid";
import WarningCard from "../components/WarningComponents/WarningCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import API from "../utils/API";
import ChartCard from "../components/ChartComponents/ChartCard";
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
  const [page, setPage] = useState(1);

  // Hooks rendering the appropiate cards based on blood sugar range
  const [level, setLevel] = useState(normal);

  const setLevels = (res)=> {
    setBloodSugar(res.data[res.data.length - 1].enteredGlucose);
    setAfterMeal(res.data[res.data.length - 1].afterMeal)
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
  }

  // These values must be set afer the database is reached.
  useEffect(()=>{
        API.getSavedGlycemia()
        .then(res => 
    setLevels(res))
        .catch(err => console.log(err));
  }, [page])

  return (
    <CardGrid>
      {/* // Play with these values to see how they render appropriately! Delete this entire div once information is successfully being retrieved from database */}
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal} />

      <ChartCard />

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
      <FoodTrackCard />

      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
