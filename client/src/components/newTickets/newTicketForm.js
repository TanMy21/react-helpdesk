import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const NewTicketForm = () => {
  return (
    <>
      <div className="new-tkt-form">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label id="new-tkt-frm-lbl">
              Contact<b className="required">*</b>
            </Form.Label>
            <Form.Control as="select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default NewTicketForm;
