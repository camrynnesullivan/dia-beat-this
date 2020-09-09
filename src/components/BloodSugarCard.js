import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function BloodSugarCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Current Blood Sugar:
          </Typography>
    
          <Typography gutterBottom variant="h5" component="h2">
          <FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg"/>
            {140} mg/dL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fasted / Just ate
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This level looks good!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}