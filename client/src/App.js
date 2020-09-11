import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import ProgressPage from "./pages/ProgressPage";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="App">
      {/* {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
      <AuthenticatedApp/>
      {/* <ProgressPage /> */}
    </div>
  );
}

export default App;
