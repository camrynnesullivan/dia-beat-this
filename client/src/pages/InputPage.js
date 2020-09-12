import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import InputFoodCard from "../components/InputComponents/InputFoodCard"
import InputBloodSugarCard from "../components/InputComponents/InputBloodSugarCard"
import InputA1CCard from "../components/InputComponents/InputA1CCard"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
        <Card>
          <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Let's figure out your insulin!
                </Typography>
              <Typography variant="h4" component="h4">
              What would you like to track?
                </Typography>
            </CardContent>
      <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <InputFoodCard value={value} index={0}/>
            <InputBloodSugarCard value={value} index={1}/>
            <InputA1CCard value={value} index={2}/>
      </Paper>
      </Card>
      )
}

export default InputPage
