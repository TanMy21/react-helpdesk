import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";

const Filter = () => {
  return (
    <>
      <form action="" method="POST" className="d-flex flex-row">
        <div className="d-flex flex-row form-group filter-input">
          <label for="agent" className="control-label filter-inp-label">
            Agent
          </label>
          <select id="agent" className="filter-option">
            <option value="agent1">Agent 1</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
