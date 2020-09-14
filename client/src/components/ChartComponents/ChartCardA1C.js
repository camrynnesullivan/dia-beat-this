import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import ChartA1C from "./ChartA1C";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function ChartCardA1C(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <ChartA1C labels={props.labels} data={props.data} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
