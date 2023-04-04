import React from "react";

import "../../App.css";
import Datatable from "../../components/datatable/Datatable";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <Datatable />
    </div>
  );
};

export default Home;
