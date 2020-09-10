import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";
import { lowLevels, treatingLBS } from "../research";
import { LBSTodo } from "./LowSugarTodo";

const useStyles = makeStyles({
  root: {
    width: 450
  },
  media: {
    height: 140,
  },
});

export default function LowLevelCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Warning!!!
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography>Your blood sugar is less than 80 mg/dl!</Typography>
          <Typography>
            {" "}
            Eat smth from a list below and check your blood sugar in 15 minutes.
            Repeat, if it still less than 100 mg/l.
          </Typography>
          <Typography>
            <List>
              {/* <FontAwesomeIcon
                icon={faCarrot}
                pull="center"
                color="orange"
                size="lg"
              /> */}
            </List>
          </Typography>
          <LBSTodo />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
