import React from "react";
// import Login from "./components/login";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
