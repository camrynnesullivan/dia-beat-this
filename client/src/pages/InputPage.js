import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"

function InputPage(props) {
  const [inputChoice, setInputChoice] = useState("Food");

  return (
      <div>
        { inputChoice === "Food" ? 
          (<InputFoodCard />) 
          :
          (<InputBloodSugarCard />)}
      </div>
      )
}

export default InputPage
