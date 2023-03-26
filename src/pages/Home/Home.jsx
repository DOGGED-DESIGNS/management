import React from "react";

import "../../App.css";
import Datatable from "../../components/Navbar/datatable/Datatable";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import Table from "../../components/Navbar/Table/Table";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Datatable />
    </div>
  );
};

export default Home;
