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
import AuthCardGrid from "./AuthCardGrid"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function SignInCard(props) {
  const classes = useStyles();

  return (
<AuthCardGrid header={props.header} handle={props.handle}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            inputRef={props.emailRef}
            autoFocus
          />
      <TextField
            variant="outlined"
            margin="normal"
            inputRef={props.passwordRef}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}>
          <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
          </Grid>
          <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={props.handleToggle}
                >
                  Sign Up
                </Button>
          </Grid>
      </Grid>
</AuthCardGrid>
)
}