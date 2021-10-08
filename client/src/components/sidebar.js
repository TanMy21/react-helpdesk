import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Row className="justify-content-md-center mt-2">
        <NavLink to="/dashboard" id="dashboard-links">
          {/* <div className="sb-logo"> */}
          <img src={Logo} className="sb-logo" />
          {/* </div> */}
        </NavLink>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <NavLink
          exact
          to="/dashboard"
          id="dashboard-links"
          activeClassName="sb-link-active"
        >
          <GoDashboard />
        </NavLink>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <NavLink
          exact
          to="/tickets"
          id="dashboard-links"
          activeClassName="sb-link-active"
        >
          <RiTicket2Line />
        </NavLink>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <NavLink
          exact
          to="/new-ticket"
          id="dashboard-links"
          activeClassName="sb-link-active"
        >
          <IoCreateOutline />
        </NavLink>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <NavLink
          exact
          to="/contacts"
          id="dashboard-links"
          activeClassName="sb-link-active"
        >
          <MdContacts />
        </NavLink>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <NavLink
          exact
          to="/settings"
          id="dashboard-links"
          activeClassName="sb-link-active"
        >
          <IoSettingsOutline />
        </NavLink>
      </Row>
    </Container>
  );
};

export default Sidebar;
