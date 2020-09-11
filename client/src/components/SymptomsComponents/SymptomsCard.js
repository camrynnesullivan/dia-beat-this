import React from "react";
import { highLevels, treatingHBS } from "../../research";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
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
import { symptomsLBS, symptomsHBS } from "../../research"

const useStyles = makeStyles({
  root: {
    width: 450,
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  dropDown: {
    margin: 30
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function LBSSymptomsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="symptoms" className={classes.avatar}>
            <FontAwesomeIcon icon={faMinus} />
          </Avatar>
        }
        // top of the card
        title={symptomsLBS.title}
      />
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div>
            <Typography gutterBottom variant="h6" component="h6">
              What to look out for
            </Typography>
          </div>
        </AccordionSummary>
        <div className={classes.dropDown}>
            <Typography variant="body2" color="textSecondary" component="p">
              {symptomsLBS.subtitle}
            </Typography>
            {/* Does not map the icons properly */}
            <Typography display="initial">
            <List>
              <ListItem><FontAwesomeIcon icon={faQuestion} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[0].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faDizzy} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[1].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faLowVision} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[2].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faPizzaSlice} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[3].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faHeartbeat} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[4].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faTemperatureLow} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[5].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faBed} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[6].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faAngry} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[7].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faTired} pull="left" color="red" size="lg" />{symptomsLBS.symptoms[8].symptomName}</ListItem>
            </List>
          </Typography>
        </div>
      </Accordion>
    </Card>
  );
}

function HBSSymptomsCard() {
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
        title={symptomsHBS.title}
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div>
            <Typography gutterBottom variant="h6" component="h6">
              What to look out for
            </Typography>
            {/* <br /> */}
          </div>
        </AccordionSummary>
        <div className={classes.dropDown}>
          <Typography variant="body2" color="textSecondary" component="p">
            {symptomsHBS.subtitle}
          </Typography>
            {/* Does not map the icons properly */}
            <Typography display="initial">
            <List>
              <ListItem><FontAwesomeIcon icon={faMeh} pull="left" color="red" size="lg" />{symptomsHBS.symptoms[0].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faLowVision} pull="left" color="red" size="lg" />{symptomsHBS.symptoms[1].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faGlassWhiskey} pull="left" color="red" size="lg" />{symptomsHBS.symptoms[2].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faBed} pull="left" color="red" size="lg" />{symptomsHBS.symptoms[3].symptomName}</ListItem>
              <ListItem><FontAwesomeIcon icon={faToilet} pull="left" color="red" size="lg" />{symptomsHBS.symptoms[4].symptomName}</ListItem>
            </List>
          </Typography>
        </div>
      </Accordion>
    </Card>
  );
}


export { LBSSymptomsCard, HBSSymptomsCard };
