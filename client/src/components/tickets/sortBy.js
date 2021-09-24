import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Sort = () => {
  return (
    <>
      <div className="filter">
        <div className="sort-by">
          <input type="checkbox" name="selectALL" value="selectALL" id="sortAllCheckbox" />
          <label for="Sort" id="sort-label">Sort By: </label>
          <select id="Sort">
            <option value="dateCreated">Date Created</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
            <option value="Group">Group</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sort;
