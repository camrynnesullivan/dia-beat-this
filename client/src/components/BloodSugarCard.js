import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function BloodSugarCard() {
  const classes = useStyles();
  const [bloodSugar, setBloodSugar] = useState(180)
  const [afterMeal, setAfterMeal] = useState(true)


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Current Blood Sugar:
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />
            {/* <span className="lastRecorded">here will be displayed the last test result</span> */}
            {bloodSugar} mg/dL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* if checked "Fasted before entering a tesr result - write "Fasted", else -"Just Ate" */}
            {afterMeal ? "You just ate" : "You are about to eat"}
          </Typography>

            {!afterMeal && bloodSugar < 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Normal!</Typography>}
            {afterMeal && bloodSugar > 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Normal!</Typography>}
            {!afterMeal && bloodSugar < 80 && <Typography variant="body2" color="textSecondary" component="p">Looks Low!</Typography>}
            {afterMeal && bloodSugar < 130 && <Typography variant="body2" color="textSecondary" component="p">Looks Low!</Typography>}
            {!afterMeal && bloodSugar > 130 && <Typography variant="body2" color="textSecondary" component="p">Looks High!</Typography>}
            {afterMeal && bloodSugar > 180 && <Typography variant="body2" color="textSecondary" component="p">Looks High!</Typography>}

          
          {/* add button to enter test result
          onClickevent create an input area for numbers
          after clicking submit, change number in span lastRecorded and save in a database with date and time, update a chart*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
