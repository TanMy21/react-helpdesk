import React from "react";
// import Nav from "../navbar";
// import Sidebar from "../sidebar";
// import Sort from "./sortBy";
// import Filter from "./filters";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TicketsCard = () => {
  return (
    <>
      <Col>
        <Row className="card ticket-card">
          <Row>
            <Col xs={4} className="card-col-1">
              <div id="tkt-cb">
                <input type="checkbox" id="tkt-cb" name="card1" value="card1" />
              </div>
            </Col>
            <Col xs={3} className="card-col-2">
              <div>
                <div className="contact-pic"></div>
              </div>
            </Col>
            <Col xs={3} className="card-col-3">
              <Row className="tkt-dt">
                <div className="badge badge-success new">NEW</div>
              </Row>
              <Row className="tkt-subject">
                <p> App Not Working. </p>
              </Row>
              <Row>
                <Col>
                  <div className="tkt-channel"></div>
                </Col>
                <Col className="tkt-meta">
                  <Col>
                    CONTACT NAME <b>.&nsbp </b>CREATED # TIME AGO{" "}
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col xs={3} className="card-col-4">
              <Row>LOW</Row>
              <Row>OPEN</Row>
            </Col>
          </Row>
        </Row>
      </Col>
    </>
  );
};

export default TicketsCard;
