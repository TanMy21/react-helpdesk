import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SettingsChannelRow from "./settingsChannelsRow";

const Channels = (props) => {

    const settingsRow = ["Row 1", "Row 2", "Row 3"]

  return (
    <>
      <Col>
        <Row className="card ch-settings">
          <Row className="settings-title">Support Channels</Row> 
          {
              settingsRow.map((row) => {
                    return <SettingsChannelRow />;
              })        
          }
        </Row>
      </Col>
    </>
  );
};

export default Channels;
