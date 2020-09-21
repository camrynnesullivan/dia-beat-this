import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 450
  },
  media: {
    height: 140,
  },
});

export default function NormalLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sugested amount of Carbs:
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            On average, people with diabetes should aim to get about half of
            their calories from carbs. That means if you normally eat about
            1,800 calories a day to maintain a healthy weight, about 800 to 900
            calories can come from carbs. At 4 calories per gram, that's 200–225
            carb grams a day.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
