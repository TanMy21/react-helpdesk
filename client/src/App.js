import React from "react";
// import Login from "./components/login";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        {/* <Navbar />
        <Sidebar /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
