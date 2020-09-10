import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  media: {
    height: 140,
  },
});
export default function FoodSuggeatedCard() {
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
            Looks good!
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
