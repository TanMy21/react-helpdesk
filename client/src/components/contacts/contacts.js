import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


const Contacts = (props) => {
  const title = "Contacts";
  return (
    <>
      <Nav title={title}/>
      <Sidebar />
      <div className="main">
      
      </div>
    </>
  );
};

export default Contacts;
