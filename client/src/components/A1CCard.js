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

export default function A1CCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Last Recorded A1C:
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            <FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />
            {props.A1C} %
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Here's some more relevent text!
            {/* {props.afterMeal ? "You just ate!" : "You are about to eat, measure again after."} */}
          </Typography>
        </CardContent>
    </Card>
  );
}
