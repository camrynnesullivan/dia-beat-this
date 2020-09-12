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
  const low = {
    warning: "low",
    research: treatingLBS,
    symptoms: symptomsLBS
  }
  const high = {
    warning: "high",
    research: treatingHBS,
    symptoms: symptomsHBS
  }
  // Input Page
  const [bloodSugar, setBloodSugar] = useState()
  const [afterMeal, setAfterMeal] = useState()

  // Progress Page
  const [level, setLevel] = useState(high)

  // This may not be the appropriate use of useEffect, but should maybe be triggered as a callback function once our page recieves the last measurement from the databse.
useEffect(() => {
  setBloodSugar(180)
  setAfterMeal(true)
  // 
// switch (afterMeal, bloodSugar) {
//         case !afterMeal && bloodSugar < 130:
//           setWarning("normal")
//           break;
//         case afterMeal && bloodSugar > 130:
//           setWarning("normal")
//           break;
//         case !afterMeal && bloodSugar < 80:
//           setWarning("low")
//           break;
//         case afterMeal && bloodSugar < 130:
//           setWarning("low")
//           break;
//         case !afterMeal && bloodSugar > 130:
//           setWarning("high")
//           break;
//         case afterMeal && bloodSugar > 180:
//           setWarning("high")
//           break;
//         default:
//           break;
//       }
})



  // const getLastMeasurement = () => {
  //     //  Once last measurement is retrieved from database
  //    

  return (
    <CardGrid>
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal}/>
      {level.warning !== "normal" && <WarningCard level={level.warning} title={level.research.title} subtitle={level.research.subtitle}  warning={level.research.warning} todos={level.research.todos} />}
      {level.warning !== "normal" && <SymptomsCard level={level.warning} title={level.symptoms.title} subtitle={level.symptoms.subtitle} summary={level.symptoms.summary} symptoms={level.symptoms.symptoms}/>}
      <FoodTrackCard />
      {/* <ChartCard /> */}
      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
