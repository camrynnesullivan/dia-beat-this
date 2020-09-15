import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function FoodTrackCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Delicious Food"
          height="140"
          image="https://foodrevolution.org/wp-content/uploads/blog-featured-diabetes-20180406-1330.jpg"
          title="Delicious Food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Calories today: {props.foodCount.calorieCount}  Kcal
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Carbs today: {props.foodCount.carbCount}  mg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My goal is: {props.foodGoal.calorieGoal} calories and {props.foodGoal.carbGoal} g Carbs / day
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
