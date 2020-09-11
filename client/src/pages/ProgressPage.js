import React, {useState} from "react";
import BloodSugarCard from "../components/BloodSugarCard";
import ChartCard from "../components/ChartComponents/ChartCard";
import {
  LBSSymptomsCard,
  HBSSymptomsCard,
} from "../components/SymptomsComponents/SymptomsCard";
import CardGrid from "../components/CardGrid";
import LowLevelCard from "../components/WarningsComponents/LowLevelCard";
import HighLevelCard from "../components/WarningsComponents/HighLevelCard";
import CareScheduleAccordion from "../components/CareScheduleComponents/CareSchedule";
import FoodTrackCard from "../components/FoodTrackCard";


function ProgressPage(props) {
  const [bloodSugar, setBloodSugar] = useState(180)
  const [afterMeal, setAfterMeal] = useState(true)
  const [warning, setWarning] = useState("high")



 const getLastMeasurement = () => {
// {!afterMeal && bloodSugar < 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Normal!</Typography>}
// {afterMeal && bloodSugar > 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Normal!</Typography>}
// {!afterMeal && bloodSugar < 80 && <Typography variant="body2" color="textSecondary" component="p">Looks Low!</Typography>}
// {afterMeal && bloodSugar < 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Low!</Typography>}
// {!afterMeal && bloodSugar > 130 && <Typography variant="body2" color="textSecondary" component="p">Looks High!</Typography>}
// {afterMeal && bloodSugar > 180 && <Typography variant="body2" color="textSecondary" component="p">Looks High!</Typography>}
  }
  

  return (
    <CardGrid>
      <BloodSugarCard bloodSugar={bloodSugar} afterMeal={afterMeal}/>
      <ChartCard />
      {warning === "low" && <LowLevelCard />}
      {warning === "high" && <HighLevelCard />}
      <FoodTrackCard />
      <LBSSymptomsCard />
      <HBSSymptomsCard />
      <CareScheduleAccordion />
    </CardGrid>
  );
}





export default ProgressPage;
