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

  // This may not be the appropriate use of useEffect, but should maybe be triggered as a callback function once our page recieves the last measurement from the databse.
useEffect(() => {
  setBloodSugar(200)
  setAfterMeal(true)
  
    //   if (!afterMeal) {
    //      if (bloodSugar < 80){
    //       setLevel(low)
    //     } else if (bloodSugar > 130) {
    //       setLevel(high)
    //     } else {
    //       setLevel(null)}
    //   } else {
    //     if (bloodSugar < 130){
    //     setLevel(low)
    //   } else if (bloodSugar > 180){
    //     setLevel(high)
    //   } else {setLevel(null)}
    // }
    
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
