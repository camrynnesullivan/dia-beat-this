import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGOUT } from "../context/actions";
import DenseAppBar from "./AppBar"

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    });
  }

  return (
    <div>
      {/* <DenseAppBar /> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AuthenticatedApp;