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
  const normal = {
    warning: "normal"
  }
  // Last Measurement from database
  const [bloodSugar, setBloodSugar] = useState()
  const [afterMeal, setAfterMeal] = useState()

  // Hooks rendering the appropiate cards based on blood sugar range
  const [level, setLevel] = useState(normal)


  // The beginning of this function needs to call the database and get information on the last recorded measurement.  There are example values here for now. The code written here might be better in a callback function, after useEffect makes the call to the databse.
useEffect(() => {
  // Play with these values to see how they render appropriately!
  setBloodSugar(200)
  setAfterMeal(true)
  // After those values are set, this function sets the level. It should be done in a callback.; It will work if you try to uncomment, biut your app will immediately crash as it creates an infinite loop here.
    // if (!afterMeal) {
    //      if (bloodSugar < 80){
    //       setLevel(low)
    //     } else if (bloodSugar > 130) {
    //       setLevel(high)
    //     } else {
    //       setLevel(normal)}
    //     } else {
    //       if (bloodSugar < 130){
    //       setLevel(low)
    //     } else if (bloodSugar > 180){
    //       setLevel(high)
    //     } else {setLevel(normal)}
    //   }
})

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
