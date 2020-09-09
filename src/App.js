import React from "react"
import ProgressPage from "./pages/ProgressPage"
import InputPage from "./pages/InputPage"
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Progress", path: "/progress" },
        { title: "Input", path: "/input" }
      ]
    };
  }
  render() {
    return (
      <Router>
      <AppBar />
      {/* <ProgressPage /> */}
      <InputPage />
      </Router>
    )
  }
}

export default App