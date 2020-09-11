import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HBSTodo from "./HighSugarTodo";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    width: 50,
    height: 50,
  },
});

export default function HighLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6" color="secondary">
          Warning!
        </Typography>
        <Typography variant="h4"> Your blood sugar is high!</Typography>
      </CardContent>
      <CardActionArea>
        <HBSTodo className={classes.toDo} />
      </CardActionArea>
    </Card>
  );
}
