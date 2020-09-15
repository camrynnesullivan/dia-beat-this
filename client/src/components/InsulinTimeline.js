import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HotelIcon from '@material-ui/icons/Hotel';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyringe } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    marginBottom: "70px"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {/* Item 0 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="primary">
            Wake up
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FontAwesomeIcon icon={ faSyringe } size="lg" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Check your blood sugar levels BEFORE you eat
            </Typography>
            <Typography>Because it&apos;s good to know your starting numbers.  And don't forget to take your medicine!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 1 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="primary">
          Eat a healthy meal <br />
            Breakfast, lunch, and dinner
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength to get through the day</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 2 */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="primary">
            After you eat something delicious and nutritious
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FontAwesomeIcon icon={ faSyringe } size="lg" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Check your blood sugar levels AFTER you eat
            </Typography>
            <Typography>Because it&apos;s good to know your numbers after you eat </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 3 */}
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="primary">
            After you work up a little sweat
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FitnessCenterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Get some exercise
            </Typography>
            <Typography>Moderate exercise, like brisk walking, will help lower your glucose levels </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 4 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <FontAwesomeIcon icon={ faSyringe } size="lg" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Check your blood sugar levels after you workout
            </Typography>
            <Typography>Because after you workout, your numbers will drop and it&apos;s good to know by how much </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 5 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest to recharge for tomorrow</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* Item 6 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because even when you feel good, you still have to take care of yourself!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}