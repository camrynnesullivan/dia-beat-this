import React, { useState, useEffect } from "react";

import BloodSugarCard from "../components/BloodSugarCard";
//import ChartCard from "../components/ChartComponents/ChartCard";
import {
  LBSSymptomsCard,
  HBSSymptomsCard,
} from "../components/SymptomsComponents/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/WarningsComponents/LowLevelCard";
import HighLevelCard from "../components/WarningsComponents/HighLevelCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";
import API from "../utils/API";

function ProgressPage(props) {
  const [bloodSugar, setBloodSugar] = useState(180);
  const [afterMeal, setAfterMeal] = useState(true);
  const [warning, setWarning] = useState("high");
  useEffect(() => {
    API.getGlucose().then((results) => {
      console.log(results.data);
    });
  }, []);

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
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal} />
      {warning === "low" && <LowLevelCard />}
      {warning === "low" && <LBSSymptomsCard />}
      {warning === "high" && <HighLevelCard />}
      {warning === "high" && <HBSSymptomsCard />}
      <FoodTrackCard />
      {/* <ChartCard /> */}
      <CareScheduleAccordion />
    </CardGrid>
  );
}

export default ProgressPage;
