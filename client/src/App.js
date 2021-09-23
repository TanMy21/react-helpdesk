import React from "react";
// import Login from "./components/login";
import "./App.css";
import Sidebar from "./components/sidebar";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Sidebar />
      </div>
    );
  }
}

export default App;
