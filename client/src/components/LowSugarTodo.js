import React from "react";
import { lowLevels, treatingLBS } from "../research";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: 450
  },
  media: {
    height: 140,
  },
});

function LBSTodo() {
const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <h3>{treatingLBS.title}</h3>
        <h4>{treatingLBS.subtitle}</h4>
        <ul>
          <li>{treatingLBS.todos[1]}</li>
          <li>{treatingLBS.todos[2]}</li>
          <li>{treatingLBS.todos[3]}</li>
          <li>{treatingLBS.todos[4]}</li>
        </ul>
      </CardContent>
    </Card>
  );
}

export { LBSTodo };
