import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { symptomsLBS, symptomsHBS } from "../../research";
import { LBSSymptomList, HBSSymptomList } from "./SymptomList";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

function LBSSymptomsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {symptomsLBS.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {symptomsLBS.subtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <LBSSymptomList />
          </Typography>
        </CardContent>
    </Card>
  );
}

function HBSSymptomsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {symptomsHBS.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {symptomsHBS.subtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <HBSSymptomList />
          </Typography>
        </CardContent>
    </Card>
  );
}

export { LBSSymptomsCard, HBSSymptomsCard };
