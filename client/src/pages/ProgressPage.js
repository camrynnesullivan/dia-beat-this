import React, { useState, useEffect } from "react";

import BloodSugarCard from "../components/BloodSugarCard";

import CardGrid from "../components/CardGrid";
import WarningCard from "../components/WarningComponents/WarningCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import { treatingHBS, treatingLBS } from "../research";
import { symptomsLBS, symptomsHBS } from "../research";
import SymptomsCard from "../components/WarningComponents/SymptomsCard"

function ProgressPage(props) {
  // Input Page
  const [bloodSugar, setBloodSugar] = useState(180)
  const [afterMeal, setAfterMeal] = useState(true)

  // Progress Page
  const [warning, setWarning] = useState("low")
  const [research, setResearch] = useState(treatingLBS)
  const [symptoms, setSymptoms] = useState(symptomsHBS)





  // const getLastMeasurement = () => {
  //     //  Once last measurement is retrieved from database
  //     switch (key) {
  //       case !afterMeal && bloodSugar < 130:
  //         setWarning("normal")
  //         break;
  //       case afterMeal && bloodSugar > 130:
  //         setWarning("normal")
  //         break;
  //       case !afterMeal && bloodSugar < 80:
  //         setWarning("low")
  //         break;
  //       case afterMeal && bloodSugar < 130:
  //         setWarning("low")
  //         break;
  //       case !afterMeal && bloodSugar > 130:
  //         setWarning("high")
  //         break;
  //       case afterMeal && bloodSugar > 180:
  //         setWarning("high")
  //         break;
  //       default:
  //         break;
  //     }

  return (
    <CardGrid>
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal}/>
      {warning !== "normal" && <WarningCard level={warning} title={research.title} subtitle={research.subtitle}  warning={research.warning} todos={research.todos} />}
      {warning !== "normal" && <SymptomsCard level={warning} title={symptoms.title} subtitle={symptoms.subtitle} summary={symptoms.summary} symptoms={symptoms.symptoms}/>}
      <FoodTrackCard />
      {/* <ChartCard /> */}
      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
