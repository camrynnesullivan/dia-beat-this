import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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

export default function BloodSugarCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Current Blood Sugar:
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />
            {props.bloodSugar} mg/dL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.afterMeal ? "You just ate!" : "You are about to eat, measure again after."}
          </Typography>
        </CardContent>
    </Card>
  );
}
