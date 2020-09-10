import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SignUpCard(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
      <Typography variant="h4">Sign Up</Typography>
      <form className={classes.form} onSubmit={props.handleSignup}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            inputRef={props.regEmailRef}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={props.regPasswordRef}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </Grid>
    </Paper>
  );
}