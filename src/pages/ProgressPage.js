import React from "react"
import Container from "@material-ui/core/Container"
import BloodSugarCard from "../components/BloodSugarCard"
import ChartCard from "../components/BloodSugarCard"
import FoodSuggestedCard from "../components/BloodSugarCard"
import SymptomsCard from "../components/BloodSugarCard"



function ProgressPage(props) {


  return <Container maxWidth="sm" fixed>
  <BloodSugarCard />
  <ChartCard />
  <FoodSuggestedCard />
  <SymptomsCard />
  </Container>
}

export default ProgressPage
