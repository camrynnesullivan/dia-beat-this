import React from "react";
import { treatingHBS } from "../../research";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  dropDown: {
    margin: 30,
    marginTop: 0
  }
});

export default function HBSTodo() {
  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <Typography variant="p">
          {treatingHBS.title}
          </Typography>
        </AccordionSummary>
        <div className={classes.dropDown}>
          <Typography variant="body2" color="textSecondary" component="p">
            {treatingHBS.subtitle}</Typography>
            <Typography display="inital">
            <List>
              <ListItem><FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />{treatingHBS.todos[1]}</ListItem>
              <ListItem><FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />{treatingHBS.todos[2]}</ListItem>
              <ListItem><FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />{treatingHBS.todos[3]}</ListItem>
            </List>
            </Typography>
            <Typography variant="h6" >{treatingHBS.warning}</Typography>
        </div>
      </Accordion>
    </div>
  );
}
