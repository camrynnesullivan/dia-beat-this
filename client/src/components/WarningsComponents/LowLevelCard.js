import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";
import LBSTodo from "./LowSugarTodo";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function LowLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>

        <CardContent>
        <Typography gutterBottom variant="h6" component="h6"  color="secondary">
            Warning!
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography variant="h4"> Your blood sugar is low!</Typography>
          </CardContent>
          <CardActionArea>
          <LBSTodo />
          </CardActionArea>
    </Card>
  );
}
