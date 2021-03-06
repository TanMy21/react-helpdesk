import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Cards from "./cards";
import Trends from "./trends";

const Dashboard = () => {
  const title = "Dashboard";
  return (
    <>
      <Nav title={title}/>
      <Sidebar />
      <div className="main">
        <Cards />
        <Trends />
      </div>
    </>
  );
};

export default Dashboard;
