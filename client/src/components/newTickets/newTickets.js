import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
import NewTicketForm from "./newTicketForm";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


const NewTicket = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="main">
        <NewTicketForm />
      </div>
    </>
  );
};

export default NewTicket;
