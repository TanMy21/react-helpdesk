import React from "react";
import Col from "react-bootstrap/Col";

const SettingsChannelCol = (props) => {
    const { icon,title } = props;
  return (
    <>
      <Col className="settings-item-col">
        <Col className="settings-item-icon">
            {icon}    
        </Col>
        <Col>{title}</Col>
      </Col>
    </>
  );
};

export default SettingsChannelCol;
