import React from "react"
import BloodSugarCard from "../components/BloodSugarCard"
import ChartCard from "../components/ChartCard"
import FoodSuggestedCard from "../components/FoodSuggestedCard"
import SymptomsCard from "../components/SymptomsCard"
import CardGrid from "../components/CardGrid"

function ProgressPage(props) {
  return (
    <CardGrid>
        <BloodSugarCard />
        <ChartCard />
        <FoodSuggestedCard />
        <SymptomsCard />
    </CardGrid>)
}

export default ProgressPage
