import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  root: {
    width: 400
  }
})

export default function InputFormGrid(props) {
const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
      <FormControl component="fieldset">
      {props.children.map((element, index) => (
        <Grid item>{element}</Grid>
        ))}     
      </FormControl>
      </Grid>
      </CardContent>
    </Card>

)
}