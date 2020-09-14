import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Chart2 from "./Chart2";
import ChartAC1 from "./ChartAC1";
const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function ChartCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Chart2 labels={props.labels} data={props.data} />
          <ChartAC1 labels={props.labels} data={props.data} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
