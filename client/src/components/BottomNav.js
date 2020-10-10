import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home"; // home
import CreateIcon from "@material-ui/icons/Create"; // input
import AssessmentIcon from "@material-ui/icons/Assessment"; // progress
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"; // resources
import SubjectIcon from "@material-ui/icons/Subject"; // journal

const useStyles = makeStyles({
  root: {
    width: "100vw",
    backgroundColor: "#f2f2f2",
    position: "relative",
    bottom: 0,
    marginTop: 55,
  },
});

export default function BottomNav() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Link to="/">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/Input">
        <BottomNavigationAction label="Input" icon={<CreateIcon />} />
      </Link>
      <Link to="/Progress">
        <BottomNavigationAction label="Progress" icon={<AssessmentIcon />} />
      </Link>
      <Link to="/Resources">
        <BottomNavigationAction label="Resources" icon={<LibraryBooksIcon />} />
      </Link>
      <Link to="/Journal">
        <BottomNavigationAction label="Journal" icon={<SubjectIcon />} />
      </Link>
    </BottomNavigation>
  );
}
