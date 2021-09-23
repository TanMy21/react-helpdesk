import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscBellDot } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <Navbar className="d-inline-flex flex-column navbar">
      <Col className="d-flex navbar-title">
        <p>Title</p>
      </Col>
      <Col className="d-flex flex-column nav-icons">
        <Col>
          <VscBellDot className="notification"/>
        </Col>
        <Col>
          <BsQuestionCircle className="help"/>
        </Col>
        <Col>
          <div className="user-icon"><b>T</b></div>
        </Col>
      </Col>
    </Navbar>
  );
};

export default Nav;
