import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
import NewTicketForm from "./newTicketForm";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


const NewTicket = (props) => {
  const title = "New Ticket";
  return (
    <>
      <Nav title={title}/>
      <Sidebar />
      <div className="main">
        <NewTicketForm />
      </div>
    </>
  );
};

export default NewTicket;
