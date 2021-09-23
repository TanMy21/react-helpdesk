import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = () => {
  return (
    <>
      <Row className="dashboard-cards">
        <Col className="card justify-content-center db-card">
          <Row className="justify-content-center">Unresolved</Row>
          <Row className="justify-content-center tkt-qty">20</Row>
        </Col>
        <Col className="card justify-content-center db-card">
          <Row className="justify-content-center">Overdue</Row>
          <Row className="justify-content-center tkt-qty">8</Row>
        </Col>
        <Col className="card justify-content-center db-card">
          <Row className="justify-content-center">Due Today</Row>
          <Row className="justify-content-center tkt-qty">10</Row>
        </Col>
        <Col className="card justify-content-center db-card">
          <Row className="justify-content-center">Open</Row>
          <Row className="justify-content-center tkt-qty">30</Row>
        </Col>
        <Col className="card justify-content-center db-card">
          <Row className="justify-content-center">Unassigned</Row>
          <Row className="justify-content-center tkt-qty">15</Row>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
