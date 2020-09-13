import React from "react";
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

  // function openInput() {
  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Set Calories Goal:
  //           <input type="text" value={this.state.value} onChange={this.handleChange} />
  //         </label>
  //         <input type="submit" value="Submit" />
  //       </form>
  //     );
  //   }
  // }
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
            My goal is:<span id="kCal">1800</span>cal and{" "}
            <span id="Carbs">200</span> Carbs grams
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={openInput}>
          Set Calories Goal
          {/* add function and an input that will allow to set a number-goal  */}
        </Button>
        <Button size="small" color="primary">
          Set Carbs Goal
        </Button>
      </CardActions>
    </Card>
  );
}
