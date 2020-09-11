import React from "react";
import { highLevels, treatingHBS } from "../../research";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  media: {
    height: 140,
  },
});

export default function HBSTodo() {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <Typography>
            <h2>{treatingHBS.title}</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <h3>{treatingHBS.subtitle}</h3>
            <ul>
              <li>{treatingHBS.todos[1]}</li>
              <li>{treatingHBS.todos[2]}</li>
              <li>{treatingHBS.todos[3]}</li>
            </ul>
            <h3>{treatingHBS.warning}</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
