import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: "99vw",
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
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                How to use this app
                </Typography>
                <Typography variant="h5" component="h2">
                What to Do to DiaBeatThis!
                </Typography>
                <br />
                <br />
                <Typography variant="h6" component="p">
                Thank you for downloading our app!  
                <br />
                </Typography>
                <Typography variant="body2" component="p">
                We're excited to help you keep your eAG and A1C levels within a safe range, plan out your insulin injections and medicine routines, as well as keep track of your food and emotions.  This app will help you beat this diagnosis and live your best life!
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small">Learn More</Button>
            </CardActions>
            <br />
            </Card>
    )
}
