import React from "react";
import Navbar from "react-bootstrap/Navbar";
import jwtDecode from "jwt-decode";
import Col from "react-bootstrap/Col";
import { VscBellDot } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import UserDropDownMenu from "./userDropdownMenu";

const Nav = (props) => {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    console.log(user);
  } catch (error) {}

  const { title } = props;
  return (
    <Navbar className="d-inline-flex flex-column navbar">
      <Col className="d-flex navbar-title">
        <p>{title}</p>
      </Col>
      <Col className="d-flex flex-column nav-icons">
        <Col>
          <VscBellDot className="notification" />
        </Col>
        <Col>
          <BsQuestionCircle className="help" />
        </Col>
        <Col>
            <div className="user-icon align-items-center">
              <UserDropDownMenu />
            </div>
        </Col>
      </Col>
    </Navbar>
  );
};

export default Nav;
