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
  const [bloodSugar, setBloodSugar] = useState(180)
  const [afterMeal, setAfterMeal] = useState(true)

  // Hooks rendering the appropiate cards based on blood sugar range
  const [level, setLevel] = useState(normal)

  // These values must be set afer the database is reached.
  // setBloodSugar(data.enteredGlucose)
  // setAfterMeal(data.afterMeal)
  
  // This will update whenever blooSugar or afterMeal changes. The states ("high", "low", "normal") have to be included as dependecies after the array to resolve error in console, even though we know they will not change.
useEffect(() => {
    if (!afterMeal) {
         if (bloodSugar < 80){
          setLevel(low)
        } else if (bloodSugar > 130) {
          setLevel(high)
        } else {
          setLevel(normal)}
        } else {
          if (bloodSugar < 130){
          setLevel(low)
        } else if (bloodSugar > 180){
          setLevel(high)
        } else {setLevel(normal)}
      }
}, [afterMeal, bloodSugar, high, low, normal])

  return (
    <CardGrid>
      {/* // Play with these values to see how they render appropriately! Delete this entire div once information is successfully being retrieved from database */}
      <div>
        <h3>Temporary area to test "Levels" state, delete once we have this data coming from database</h3>
        <p>Click to see the elements change!</p>
        <button onClick={()=> setBloodSugar(bloodSugar + 10)}>Raise measurement number</button>
        <button onClick={()=> setBloodSugar(bloodSugar - 10)}>Lower measurement number</button>
        <button onClick={()=> setAfterMeal(!afterMeal)}>Switch before/after meal</button>
      </div>
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
