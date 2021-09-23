import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoDashboard } from "react-icons/go";
import { GrTicket } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Row className="justify-content-md-center mt-2">
        <a href="/#" id="dashboard-links"><RiCustomerService2Line /></a>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <a href="/#" id="dashboard-links"><GoDashboard /></a>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <a href="/#" id="dashboard-links"><GrTicket /></a>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <a href="/#" id="dashboard-links"><IoCreateOutline /></a>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <a href="/#" id="dashboard-links"><MdContacts /></a>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <a href="/#" id="dashboard-links"><IoSettingsOutline /></a>
      </Row>
    </Container>
  );
};

export default Sidebar;
