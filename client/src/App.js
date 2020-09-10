import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import ProgressPage from "./pages/ProgressPage";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="App">
<<<<<<< HEAD
=======
      <ProgressPage />
>>>>>>> 015b380778092f79a5a5275d9e2fa3476d1e3e5e
      {/* {state.user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
    </div>
  );
}

export default App;
