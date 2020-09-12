import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [state] = useGlobalContext();
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  return (
    <div className="App">
      {state.user.token || authUser ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
