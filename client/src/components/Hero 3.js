import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: 10,
    marginBottom: 10,
    backgroundImage: "url(https://media.istockphoto.com/photos/love-concept-exclamation-point-inside-of-a-red-folding-heart-shape-on-picture-id1188529144?k=6&m=1188529144&s=170667a&w=0&h=yrmZpR7azbHTDHYYJ7KCFljqQ4Aa7JS0obiqFnQ8NrE=)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  heroContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.hero}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Welcome to our Application
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Subtitle
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}