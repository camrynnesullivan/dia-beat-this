import React from "react";
import { lowLevels, treatingLBS } from "../../research";
import { makeStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
=======
import CardContent from "@material-ui/core/CardContent";
>>>>>>> master


export default function LBSTodo() {

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
            <h2>{treatingLBS.title}</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <h3>{treatingLBS.subtitle}</h3>
            <h3>{treatingLBS.level}</h3>

            <ul>
              <li>{treatingLBS.todos[1]}</li>
              <li>{treatingLBS.todos[2]}</li>
              <li>{treatingLBS.todos[3]}</li>
              <li>{treatingLBS.todos[4]}</li>
              <li>{treatingLBS.todos[5]}</li>
              <li>{treatingLBS.todos[6]}</li>
            </ul>
            <h3>{treatingLBS.warning}</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
