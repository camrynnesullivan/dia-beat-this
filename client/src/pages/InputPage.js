import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"
import InputA1CCard from "../components/InputComponents/InputA1CCard"
import CardGrid from "../components/CardGrid"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function InputPage(props) {
  const classes = useStyles();
  const [inputChoice, setInputChoice] = useState(null);
  const [showTitle, setShowTitle] = useState(true);
  const [value, setValue] = React.useState(0);

const handleTrackButton = (buttonChoice) => {
    setInputChoice(buttonChoice)
    setShowTitle(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const buttonOptions = [
    {
      id: "1",
      buttonName: "Food",
      buttonChoice: "Food",
      color: "primary"
    },
    {
      id: "2",
      buttonName: "Blood Sugar",
      buttonChoice: "BloodSugar",
      color: "secondary"
    },
    {
      id: "3",
      buttonName: "A1C",
      buttonChoice: "A1C",
      color: "primary"
    },
  ];

  return (
      <CardGrid>
<Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>

{/* 
        {/* <Card>
        {showTitle &&<CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Let's figure out your insulin!
        </Typography>
      <Typography variant="h4" component="h4">
       What would you like to track?
        </Typography>
      </CardContent>}
      <CardActions>
                {buttonOptions.map(button => {
                  const { buttonName, buttonChoice, color, id } = button;
                  return (
                    <Button key={id} variant="contained" size="small" color={color} onClick={() => handleTrackButton(buttonChoice)}>
                      Track {buttonName}
                    </Button>
                  );
                })}
      </CardActions>
        </Card>
        { inputChoice === "Food" && (<InputFoodCard />)}
        { inputChoice === "BloodSugar" && (<InputBloodSugarCard />)}
        { inputChoice === "A1C" && (<InputA1CCard />)} */} */}
      </CardGrid>
      )
}

export default InputPage
