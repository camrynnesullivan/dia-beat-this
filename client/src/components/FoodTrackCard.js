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

export default function FoodTrackCard() {
  const classes = useStyles();
  const [calories, setCalories] = useState(200);
  const [carbs, setCarbs] = useState(80);

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
            Calories today:<span>0</span> Kcal
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Carbs today:<span>0</span> mg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My goal is:<span id="kCal">{calories}</span>cal and{" "}
            <span id="Carbs">{carbs}</span> Carbs grams
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Set Calories Goal
          {/* // onClick toggle display of th input */}
        </Button>
        <Button size="small" color="primary">
          Set Carbs Goal
        </Button>
      </CardActions>
    </Card>
  );
}
