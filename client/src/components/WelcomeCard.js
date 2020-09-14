import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: "99vw",
      padding: 20,
      margin: 20,
      width: "80vw",
    },
    title: {
      fontSize: 16,
    },
    body2: {
      fontSize: 16,
    },
  });

export default function WelcomeCard() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div>
                <Typography variant="h3" component="h2">
                Thank you for downloading our app!
                </Typography>
                <br />
                <Typography variant="h5" component="p">
                We built this app to help our friends and family control their Type 2 Diabetes.  We wanted a way for them to track their blood sugar and A1C levels, learn about what they can do to maintain normal glucose levels, find out about complications that they need to be aware of, learn about when to see their doctors, and track their emotions throughout the day.
                <br />
                </Typography>
                <Typography variant="h6" component="p">
                <br />
                This app will help you beat this diagnosis and live your best life!
                </Typography>
            </div>
            <br />
            <div>
                <Link to="/Resources">
                <Button variant="contained" color="primary" >Learn More</Button>
                </Link>
            </div>
            <br />
        </section>
    )
}
