import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "./components/login";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import NewTicket from "./components/newTickets/newTickets";
import Contacts from "./components/contacts/contacts";
import Settings from "./components/settings/settings";
import Tickets from "./components/tickets/tickets";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Title: ["Dashboard", "ALL Tickets", "New Ticket", "Contacts", "Settings"],
    };
  }
  render() {
    // const { Title } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Login /> */}
          {/* <Navbar />
        <Sidebar /> */}
          {/* <Dashboard /> */}
          {/* <Tickets /> */}
          {/* <NewTicket /> */}
          {/* <Settings /> */}
        </div>
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/tickets" component={Tickets} exact/>
          <Route path="/new-ticket" component={NewTicket} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route path="/settings" component={Settings} exact/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
