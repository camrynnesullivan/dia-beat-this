import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import { red } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {
  faMeh,
  faGlassWhiskey,
  faBed,
  faDizzy,
  faToilet,
  faAngry,
  faTired,
  faTemperatureLow,
  faHeartbeat,
  faPizzaSlice,
  faLowVision,
  faQuestion,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    width: 450,
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  dropDown: {
    margin: 30,
    marginTop: 0
  },
  avatar: {
    backgroundColor: red[500],
  }
});

function SymptomsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="symptoms" className={classes.avatar}>
            <FontAwesomeIcon icon={faPlus} />
          </Avatar>
        }
        // top of the card
        title={props.title}
        titleTypographyProps={{variant:'h5' }}
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          className={classes.summary}
        >
            <Typography variant="p">
              What to know about high glucose
            </Typography>
        </AccordionSummary>
        <div className={classes.dropDown}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.subtitle}
          </Typography>
            {/* Does not map the icons properly */}
            <Typography display="initial">
            <List>
              <ListItem><FontAwesomeIcon icon={faMeh} pull="left" color="red" size="lg" />{props.symptoms[0].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faLowVision} pull="left" color="red" size="lg" />{props.symptoms[1].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faGlassWhiskey} pull="left" color="red" size="lg" />{props.symptoms[2].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faBed} pull="left" color="red" size="lg" />{props.symptoms[3].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faToilet} pull="left" color="red" size="lg" />{props.symptoms[4].symptomName}</ListItem>
            </List>
          </Typography>
        </div>
      </Accordion>
    </Card>
  );
}


export default SymptomsCard;
