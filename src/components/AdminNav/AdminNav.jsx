import { Login, Menu } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import "../../App.css";

const AdminNav = ({ turnTrue, toggle }) => {
  return (
    <nav className=" d-flex   p-3 shadow-sm bg-white">
      <div className=" mr-auto">
        {toggle ? (
          " "
        ) : (
          <IconButton
            onClick={() => {
              turnTrue();
              console.log(" i have been clicked");
            }}
          >
            <Menu />
          </IconButton>
        )}
      </div>
      <div className=" m-auto">
        <Typography variant="h5" className=" text-center  textcapitalize">
          Dashboard
        </Typography>
      </div>

      <div className=" ml-auto">
        <Button size="small" variant="text" startIcon={<Login />}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default AdminNav;
