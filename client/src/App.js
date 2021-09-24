import React from "react";
// import Login from "./components/login";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar";
import NewTicket from "./components/newTickets/newTickets";
import Sidebar from "./components/sidebar";
import Tickets from "./components/tickets/tickets";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        {/* <Navbar />
        <Sidebar /> */}
        {/* <Dashboard /> */}
        {/* <Tickets /> */}
        <NewTicket />
      </div>
    );
  }
}

export default App;
