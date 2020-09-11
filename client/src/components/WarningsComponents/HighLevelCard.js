import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { HBSTodo } from "./HighSugarTodo";
const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function HighLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Warning!!!
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography>Your blood sugar is high!</Typography>
          <HBSTodo />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
