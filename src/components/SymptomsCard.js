import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { symptomsLBS, symptomsHBS } from "../../src/research"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function SymptomsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {symptomsLBS.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {symptomsLBS.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
