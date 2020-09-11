import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"
import InputA1CCard from "../components/InputComponents/InputA1CCard"
import CardGrid from "../components/CardGrid"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function InputPage(props) {
  const classes = useStyles();
  const [inputChoice, setInputChoice] = useState(null);
  const [showTitle, setShowTitle] = useState(true);

const handleTrackButton = (buttonChoice) => {
    setInputChoice(buttonChoice)
    setShowTitle(false)
  }

  const buttonOptions = [
    {
      id: "1",
      buttonName: "Food",
      buttonChoice: "Food",
      color: "primary"
    },
    {
      id: "2",
      buttonName: "Blood Sugar",
      buttonChoice: "BloodSugar",
      color: "secondary"
    },
    {
      id: "3",
      buttonName: "A1C",
      buttonChoice: "A1C",
      color: "primary"
    },
  ];

  return (
      <CardGrid>
        <Card>
        {showTitle &&<CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Let's figure out your insulin!
        </Typography>
      <Typography variant="h4" component="h4">
       What would you like to track?
        </Typography>
      </CardContent>}
      <CardActions>
                {buttonOptions.map(button => {
                  const { buttonName, buttonChoice, color, id } = button;
                  return (
                    <Button key={id} variant="contained" size="small" color={color} onClick={() => handleTrackButton(buttonChoice)}>
                      Track {buttonName}
                    </Button>
                  );
                })}
      </CardActions>
        </Card>
        { inputChoice === "Food" && (<InputFoodCard />)}
        { inputChoice === "BloodSugar" && (<InputBloodSugarCard />)}
        { inputChoice === "A1C" && (<InputA1CCard />)}
      </CardGrid>
      )
}

export default InputPage
