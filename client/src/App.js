import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import ProgressPage from "./pages/ProgressPage";

function App() {
  const [state, dispatch] = useGlobalContext();
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  return (
    <div className="App">
      {state.user.token || authUser ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
      {/* <AuthenticatedApp /> */}
    </div>
  );
}

export default App;
