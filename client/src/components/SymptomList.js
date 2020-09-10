import React from 'react'
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { symptomsLBS, symptomsHBS } from "../research"

const useStyles = makeStyles({
  root: {
    width: 450
  },
  media: {
    height: 140,
  },
});

function LBSSymptomList() {
  const classes = useStyles();
    return (
      <Card className={classes.root}>
        <div className="symptoms-list-main-div">
          <ul className="fa-ul">
            {symptomsLBS.symptoms.map(symptoms => {
              return (
                <li><span className={"fa-li"}><i className={symptoms.fontAwesomeClassname}></i></span>
                  {symptoms.symptomName}
                </li>
              )
            })}
          </ul>
        </div>
      </Card>
    )
}

function HBSSymptomList() {
  const classes = useStyles();
    return (
      <Card className={classes.root}>
        <div className="symptoms-list-main-div">
          <ul className="fa-ul">
            {symptomsHBS.symptoms.map(symptoms => {
              return (
                <li><span className={"fa-li"}><i className={symptoms.fontAwesomeClassname}></i></span>
                  {symptoms.symptomName}
                </li>
              )
            })}
          </ul>
        </div>
      </Card>
    )
}

export { LBSSymptomList, HBSSymptomList }