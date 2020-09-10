import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";
import { lowLevels, treatingLBS } from "../research";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
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
              <ListItem>1/2 banana</ListItem>
              <ListItem>1 small apple</ListItem>
              <ListItem>1 small orange</ListItem>
              <ListItem>1/2 cup applesauce</ListItem>
              <ListItem>15 grapes</ListItem>
            </List>
          </Typography>
          <div>
            <div className="symptoms-list-main-div">
              <ul className="fa-ul">
                {treatingLBS.todos.map((todos) => {
                  return <li>{todos}</li>;
                })}
              </ul>
            </div>
          </div>
          )
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
