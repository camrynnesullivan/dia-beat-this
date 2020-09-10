import React from "react"
import BloodSugarCard from "../components/BloodSugarCard"
import ChartCard from "../components/ChartCard"
import FoodSuggestedCard from "../components/FoodSuggestedCard"
import { LBSSymptomsCard, HBSSymptomsCard } from "../components/SymptomsCard"
import CardGrid from "../components/CardGrid"

function ProgressPage(props) {
  return (
    <CardGrid>
        <BloodSugarCard />
        <ChartCard />
        <FoodSuggestedCard />
        <LBSSymptomsCard />
        <HBSSymptomsCard />
    </CardGrid>)
}

export default ProgressPage
