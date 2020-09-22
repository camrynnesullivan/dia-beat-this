import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    color: theme.palette.common.white,
    marginTop: 10,
    marginBottom: 10,
    padding: 120,
    backgroundImage:
      "url(https://static1.squarespace.com/static/5dc5a0bfb54f50486c84b742/t/5f5ec536a6a3fc6ccb1fdb8e/1600046390731/DiaBeatThisWelcomeScreen.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "none",
  },
  heroContent: {
    color: "#2f3676",
    position: "relative",
    bottom: "130px",
    textAlign: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
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
      <div container>
        <div item md={6}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Welcome to DiaBeatThis!
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Managing your diabetes and beating this diagnosis
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
}
