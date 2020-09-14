import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SubmitDialog(props) {

  return (
    <div>
      <Dialog
        open={props.openDialog}
        onClose={props.handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Your measurement has been recorded!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.tab === 0 && "Calorie Goal: " + props.calorieGoal + " Carb Goal: " + props.carbGoal + "/day"}
            {props.tab === 1 && "BloodSugar: " + props.measurement.measurement + "mg/dL"}
            {props.tab === 2 && "A1C: " + props.measurement.measurement + "%" }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogClose} color="primary" autoFocus>
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}