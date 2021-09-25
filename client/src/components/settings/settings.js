import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
import Channels from "./channels";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


const Settings = (props) => {
  const title = "Settings";
  return (
    <>
      <Nav title={title}/>
      <Sidebar />
      <div className="main">
        <Channels />
      </div>
    </>
  );
};

export default Settings;
