import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  media: {
    height: 140,
  },
});
export default function LowLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sugessted amount of Carbs:
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            On average, people with diabetes should aim to get about half of
            their calories from carbs. That means if you normally eat about
            1,800 calories a day to maintain a healthy weight, about 800 to 900
            calories can come from carbs. At 4 calories per gram, that's 200–225
            carb grams a day.
          </Typography> */}
          <Typography>
            Your blood sugar is less than 70 mg/dl! Eat smth from a list below
            {/* and then recheck your blood sugar in 15 min! If your blood sugar is
            still less than 100 mg/dl, take another 15 grams of carbohydrate and
            retest your blood sugar in another 15 minutes. Repeat if necessary. */}
          </Typography>
          <Typography>
            <List>
              <ListItem>1/2 banana</ListItem>
              <ListItem>1 small apple</ListItem>
              <ListItem>1 small orange</ListItem>
              <ListItem>1/2 cup applesauce</ListItem>
              <ListItem>15 grapes</ListItem>
            </List>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
