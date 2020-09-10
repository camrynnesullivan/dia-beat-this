import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { careSchedule } from "../research"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function CareScheduleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {/* Daily */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Every Day</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* check blood sugar ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.daily[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.daily[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check feet ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.daily[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.daily[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* take meds ==================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.daily[2].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.daily[2].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* exercise ======================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.daily[3].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.daily[3].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* eat healthy ======================================================================= */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.daily[4].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.daily[4].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every 3 Months */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Every 3 Months</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* A1C ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.threeMos[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.threeMos[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* visit doctor ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.threeMos[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.threeMos[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every 6 Months */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Every 6 Months</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* dental exam ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.sixMos[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.sixMos[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* A1C test ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.sixMos[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.sixMos[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* visit doctor ==================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.sixMos[2].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.sixMos[2].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every Year */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Every Year</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* flu shot ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.yearly[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.yearly[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check kidneys ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.yearly[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.yearly[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check cholesterol ==================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.yearly[2].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.yearly[2].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* eye exam ======================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.yearly[3].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.yearly[3].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check feet ======================================================================= */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.yearly[4].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.yearly[4].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Once */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Once</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* flu shot ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.once[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.once[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check kidneys ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.once[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.once[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* As Needed */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>As Needed</Typography>
          <Typography className={classes.secondaryHeading}>See details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* =====================================NESTED===================================== */}
            <div>
                {/* flu shot ========================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.asNeeded[0].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.asNeeded[0].description}</Typography>
                    </AccordionDetails>
                </Accordion>
                {/* check kidneys ================================================================== */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={careSchedule.asNeeded[1].title}
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">{careSchedule.asNeeded[1].description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}