import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import AuthCardGrid from "./AuthCardGrid"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SignUpCard(props) {
  const classes = useStyles();

  return (
<AuthCardGrid header={props.header}>
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
                    <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}>
            <Grid item>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          </Grid>
          <Grid item>
          <Button
            variant="contained"
            color="default"
            className={classes.submit}
            onClick={props.handleToggle}
          >
            Back to Sign-in
          </Button>
          </Grid>
          </Grid>
    </AuthCardGrid>
  );
}