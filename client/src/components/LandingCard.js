import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
    },
    media: {
      height: 350,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: "#f2f2f2",
      },
  }));

export default function LandingCard() {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="blood droplet" src="https://static1.squarespace.com/static/5dc5a0bfb54f50486c84b742/t/5f5fafe1813aae356189f522/1600106465111/DiaBeatThisFavicon.png"  className={classes.avatar} />
        }
        titleTypographyProps={{variant:'h5'}}
        title="Welcome to DiaBeatThis!"
      />
      <CardMedia
        className={classes.media}
        image="https://static1.squarespace.com/static/5dc5a0bfb54f50486c84b742/t/5f5fc3edbdb9f22528dc4d73/1600111597806/DiaBeatThisLandingScreen.png"
        title="DiaBeatThis! Logo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Sign up or login to your DiaBeatThis! account below.
        </Typography>
      </CardContent>
    </Card>
  
    )
}
