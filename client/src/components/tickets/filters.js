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
        <div className="form-group filter-input">
          <label for="group" className="control-label filter-inp-label">
            Group
          </label>
          <select id="group" className="filter-option">
            <option value="group1">GROUP 1</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
