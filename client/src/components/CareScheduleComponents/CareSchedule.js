import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { careSchedule } from "../../research";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    marginBottom: "70px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function CareScheduleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // localStorage Stuff
  const storedCheckbox = localStorage.getItem("checkbox1") ? JSON.parse(localStorage.getItem("checkbox1")) : false

  const [checkbox1, setCheckbox1] = React.useState(storedCheckbox);
  console.log(JSON.parse(storedCheckbox))

  function handleCheckbox(checkbox){
    checkbox = !checkbox
    setCheckbox1(checkbox)
    localStorage.setItem("checkbox1", checkbox)
  };

  // 2
  const storedCheckbox2 = localStorage.getItem("checkbox2") ? JSON.parse(localStorage.getItem("checkbox2")) : false

  const [checkbox2, setCheckbox2] = React.useState(storedCheckbox2);
  console.log(JSON.parse(storedCheckbox2))

  function handleCheckbox2(checkbox){
    checkbox = !checkbox
    setCheckbox2(checkbox)
    localStorage.setItem("checkbox2", checkbox)
  };

  // 3
  const storedCheckbox3 = localStorage.getItem("checkbox3") ? JSON.parse(localStorage.getItem("checkbox3")) : false

  const [checkbox3, setCheckbox3] = React.useState(storedCheckbox3);
  console.log(JSON.parse(storedCheckbox3))

  function handleCheckbox3(checkbox){
    checkbox = !checkbox
    setCheckbox3(checkbox)
    localStorage.setItem("checkbox3", checkbox)
  };

  // 4
  const storedCheckbox4 = localStorage.getItem("checkbox4") ? JSON.parse(localStorage.getItem("checkbox4")) : false

  const [checkbox4, setCheckbox4] = React.useState(storedCheckbox4);
  console.log(JSON.parse(storedCheckbox4))

  function handleCheckbox4(checkbox){
    checkbox = !checkbox
    setCheckbox4(checkbox)
    localStorage.setItem("checkbox4", checkbox)
  };

  // 5
  const storedCheckbox5 = localStorage.getItem("checkbox5") ? JSON.parse(localStorage.getItem("checkbox5")) : false

  const [checkbox5, setCheckbox5] = React.useState(storedCheckbox5);
  console.log(JSON.parse(storedCheckbox5))

  function handleCheckbox5(checkbox){
    checkbox = !checkbox
    setCheckbox5(checkbox)
    localStorage.setItem("checkbox5", checkbox)
  };

  // 6
  const storedCheckbox6 = localStorage.getItem("checkbox6") ? JSON.parse(localStorage.getItem("checkbox6")) : false

  const [checkbox6, setCheckbox6] = React.useState(storedCheckbox6);
  console.log(JSON.parse(storedCheckbox6))

  function handleCheckbox6(checkbox){
    checkbox = !checkbox
    setCheckbox6(checkbox)
    localStorage.setItem("checkbox6", checkbox)
  };

  // 7
  const storedCheckbox7 = localStorage.getItem("checkbox7") ? JSON.parse(localStorage.getItem("checkbox7")) : false

  const [checkbox7, setCheckbox7] = React.useState(storedCheckbox7);
  console.log(JSON.parse(storedCheckbox7))

  function handleCheckbox7(checkbox){
    checkbox = !checkbox
    setCheckbox7(checkbox)
    localStorage.setItem("checkbox7", checkbox)
  };

  // 8
  const storedCheckbox8 = localStorage.getItem("checkbox8") ? JSON.parse(localStorage.getItem("checkbox8")) : false

  const [checkbox8, setCheckbox8] = React.useState(storedCheckbox8);
  console.log(JSON.parse(storedCheckbox8))

  function handleCheckbox8(checkbox){
    checkbox = !checkbox
    setCheckbox8(checkbox)
    localStorage.setItem("checkbox8", checkbox)
  };

  // 9
  const storedCheckbox9 = localStorage.getItem("checkbox9") ? JSON.parse(localStorage.getItem("checkbox9")) : false

  const [checkbox9, setCheckbox9] = React.useState(storedCheckbox9);
  console.log(JSON.parse(storedCheckbox9))

  function handleCheckbox9(checkbox){
    checkbox = !checkbox
    setCheckbox9(checkbox)
    localStorage.setItem("checkbox9", checkbox)
  };

  // 10
  const storedCheckbox10 = localStorage.getItem("checkbox10") ? JSON.parse(localStorage.getItem("checkbox10")) : false

  const [checkbox10, setCheckbox10] = React.useState(storedCheckbox10);
  console.log(JSON.parse(storedCheckbox10))

  function handleCheckbox10(checkbox){
    checkbox = !checkbox
    setCheckbox10(checkbox)
    localStorage.setItem("checkbox10", checkbox)
  };

  // 11
  const storedCheckbox11 = localStorage.getItem("checkbox11") ? JSON.parse(localStorage.getItem("checkbox11")) : false

  const [checkbox11, setCheckbox11] = React.useState(storedCheckbox11);
  console.log(JSON.parse(storedCheckbox11))

  function handleCheckbox11(checkbox){
    checkbox = !checkbox
    setCheckbox11(checkbox)
    localStorage.setItem("checkbox11", checkbox)
  };

  // 12
  const storedCheckbox12 = localStorage.getItem("checkbox12") ? JSON.parse(localStorage.getItem("checkbox12")) : false

  const [checkbox12, setCheckbox12] = React.useState(storedCheckbox12);
  console.log(JSON.parse(storedCheckbox12))

  function handleCheckbox12(checkbox){
    checkbox = !checkbox
    setCheckbox12(checkbox)
    localStorage.setItem("checkbox12", checkbox)
  };

  // 13
  const storedCheckbox13 = localStorage.getItem("checkbox13") ? JSON.parse(localStorage.getItem("checkbox13")) : false

  const [checkbox13, setCheckbox13] = React.useState(storedCheckbox13);
  console.log(JSON.parse(storedCheckbox13))

  function handleCheckbox13(checkbox){
    checkbox = !checkbox
    setCheckbox13(checkbox)
    localStorage.setItem("checkbox13", checkbox)
  };

  // 14
  const storedCheckbox14 = localStorage.getItem("checkbox14") ? JSON.parse(localStorage.getItem("checkbox14")) : false

  const [checkbox14, setCheckbox14] = React.useState(storedCheckbox14);
  console.log(JSON.parse(storedCheckbox14))

  function handleCheckbox14(checkbox){
    checkbox = !checkbox
    setCheckbox14(checkbox)
    localStorage.setItem("checkbox14", checkbox)
  };

  // 15
  const storedCheckbox15 = localStorage.getItem("checkbox15") ? JSON.parse(localStorage.getItem("checkbox15")) : false

  const [checkbox15, setCheckbox15] = React.useState(storedCheckbox15);
  console.log(JSON.parse(storedCheckbox15))

  function handleCheckbox15(checkbox){
    checkbox = !checkbox
    setCheckbox15(checkbox)
    localStorage.setItem("checkbox15", checkbox)
  };

  // 16
  const storedCheckbox16 = localStorage.getItem("checkbox16") ? JSON.parse(localStorage.getItem("checkbox16")) : false

  const [checkbox16, setCheckbox16] = React.useState(storedCheckbox16);
  console.log(JSON.parse(storedCheckbox16))

  function handleCheckbox16(checkbox){
    checkbox = !checkbox
    setCheckbox16(checkbox)
    localStorage.setItem("checkbox16", checkbox)
  };

  // 17
  const storedCheckbox17 = localStorage.getItem("checkbox17") ? JSON.parse(localStorage.getItem("checkbox17")) : false

  const [checkbox17, setCheckbox17] = React.useState(storedCheckbox17);
  console.log(JSON.parse(storedCheckbox17))

  function handleCheckbox17(checkbox){
    checkbox = !checkbox
    setCheckbox17(checkbox)
    localStorage.setItem("checkbox17", checkbox)
  };

  // 18
  const storedCheckbox18 = localStorage.getItem("checkbox18") ? JSON.parse(localStorage.getItem("checkbox18")) : false

  const [checkbox18, setCheckbox18] = React.useState(storedCheckbox18);
  console.log(JSON.parse(storedCheckbox18))

  function handleCheckbox18(checkbox){
    checkbox = !checkbox
    setCheckbox18(checkbox)
    localStorage.setItem("checkbox18", checkbox)
  };

  // 19
  const storedCheckbox19 = localStorage.getItem("checkbox19") ? JSON.parse(localStorage.getItem("checkbox19")) : false

  const [checkbox19, setCheckbox19] = React.useState(storedCheckbox19);
  console.log(JSON.parse(storedCheckbox19))

  function handleCheckbox19(checkbox){
    checkbox = !checkbox
    setCheckbox19(checkbox)
    localStorage.setItem("checkbox19", checkbox)
  };

  return (
    <div className={classes.root}>
        <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="schedule" className={classes.avatar}>
              <FontAwesomeIcon icon={faHospitalUser} />
            </Avatar>
          }
          // top of the card
          titleTypographyProps={{variant:'h5' }}
          title="Your Care Schedule"
          subheader="Managing your type-2 diabetes"
        />
      {/* Daily */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Every Day</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox(checkbox1)}}
                  checked={checkbox1}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.daily[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.daily[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox2(checkbox2)}}
                  checked={checkbox2}                  
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.daily[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.daily[1].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox3(checkbox3)}}
                  checked={checkbox3}                    
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.daily[2].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.daily[2].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox4(checkbox4)}}
                  checked={checkbox4}                    
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.daily[3].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.daily[3].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox5(checkbox5)}}
                  checked={checkbox5}                    
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.daily[4].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.daily[4].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every 3 Months */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Every 3 Months</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox6(checkbox6)}}
                  checked={checkbox6}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.threeMos[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.threeMos[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox7(checkbox7)}}
                  checked={checkbox7}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.threeMos[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.threeMos[1].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every 6 Months */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Every 6 Months</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox8(checkbox8)}}
                  checked={checkbox8}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.sixMos[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.sixMos[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox9(checkbox9)}}
                  checked={checkbox9}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.sixMos[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.sixMos[1].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox10(checkbox10)}}
                  checked={checkbox10}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.sixMos[2].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.sixMos[2].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Every Year */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Every Year</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox11(checkbox11)}}
                  checked={checkbox11}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.yearly[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.yearly[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox12(checkbox12)}}
                  checked={checkbox12}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.yearly[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.yearly[1].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox13(checkbox13)}}
                  checked={checkbox13}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.yearly[2].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.yearly[2].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox14(checkbox14)}}
                  checked={checkbox14}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.yearly[3].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.yearly[3].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox15(checkbox15)}}
                  checked={checkbox15}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.yearly[4].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.yearly[4].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* Once */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Once</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox16(checkbox16)}}
                  checked={checkbox16}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.once[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.once[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox17(checkbox17)}}
                  checked={checkbox17}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.once[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.once[1].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      {/* As Needed */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>As Needed</Typography>
          <Typography className={classes.secondaryHeading}>
            See details
          </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox18(checkbox18)}}
                  checked={checkbox18}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.asNeeded[0].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.asNeeded[0].description}
                </Typography>
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
                  type="checkbox"
                  onClick={(event) => {event.stopPropagation(); handleCheckbox19(checkbox19)}}
                  checked={checkbox19}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label={careSchedule.asNeeded[1].title}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {careSchedule.asNeeded[1].description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* =====================================NESTED===================================== */}
        </AccordionDetails>
      </Accordion>
      </Card>
    </div>
  );
}
