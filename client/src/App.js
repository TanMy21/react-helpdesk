import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import NewTicket from "./components/newTickets/newTickets";
import Contacts from "./components/contacts/contacts";
import Settings from "./components/settings/settings";
import Tickets from "./components/tickets/tickets";
import Logout from "./components/logout";
import ProtectedRoute from "./components/protectedRoute";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <ProtectedRoute path="/logout" component={Logout} exact />
          <ProtectedRoute path="/dashboard" component={Dashboard} exact />
          <ProtectedRoute path="/tickets" component={Tickets} exact />
          <ProtectedRoute path="/new-ticket" component={NewTicket} exact />
          <ProtectedRoute path="/contacts" component={Contacts} exact />
          <ProtectedRoute path="/settings" component={Settings} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
