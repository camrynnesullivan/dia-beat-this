import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGOUT } from "../context/actions";
import NavBar from "./NavBar"
import HomePage from "../pages/HomePage"
import InputPage from "../pages/InputPage"
import ProgressPage from "../pages/ProgressPage"
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = () => {
    console.log("Clicked!")
    dispatch({
      type: LOGOUT
    });
  }

  return (
    <div>
      <Router>
      <NavBar handleLogout={handleLogout}/>
      <Switch>
        <Route exact from="/" render={props => <HomePage {...props} />} />
        <Route exact path="/input" render={props => <InputPage {...props} />} />
        <Route exact path="/progress" render={props => <ProgressPage {...props} />} />
      </Switch>
      </Router>

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default AuthenticatedApp;