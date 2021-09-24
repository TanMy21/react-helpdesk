import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
import Sort from "./sortBy";
import Filter from "./filters";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TicketsCard from "./tkt-cards";

const Tickets = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <Sort />
      <div className="d-flex flex-column main">
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        <TicketsCard />
        
        <Col className="filters-panel">
          <Row className="card apply-filters">
            <Filter />
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Tickets;
