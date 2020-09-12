import React, { useState, useEffect } from "react";

import BloodSugarCard from "../components/BloodSugarCard";
//import ChartCard from "../components/ChartComponents/ChartCard";
import {
  LBSSymptomsCard,
  HBSSymptomsCard,
} from "../components/SymptomsComponents/SymptomsCard";
import CardGrid from "../components/CardGrid";
import WarningCard from "../components/WarningsComponents/WarningCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import { treatingHBS, treatingLBS } from "../research";


function ProgressPage(props) {
  // Input Page
  const [bloodSugar, setBloodSugar] = useState(180)
  const [afterMeal, setAfterMeal] = useState(true)

  // Progress Page
  const [warning, setWarning] = useState("low")
  const [research, setResearch] = useState(treatingLBS)

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
      {/* {warning === "low" && <LBSSymptomsCard />} */}
      {/* {warning === "high" && <HighLevelCard />}
      {warning === "high" && <HBSSymptomsCard />} */}
      <FoodTrackCard />
      {/* <ChartCard /> */}
      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
