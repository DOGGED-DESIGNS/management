import { People } from "@mui/icons-material";
import { Typography } from "@mui/joy";
import { IconButton } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import "../../App.css";
import Piez from "../PIe/Pie";
const Dashboard = () => {
  return (
    <div
      className=" p-3 border"
      style={{ height: "100vh", overflowX: "scroll" }}
    >
      <div className="row">
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 com-lg-3 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#66ff66" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row">
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#c7ffc7" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 p-3 com-lg-4 col-sm-12 ">
          <div
            className=" shadow-sm p-2 bg-white"
            style={{
              borderRadius: "3px",
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100px",
            }}
          >
            <div
              style={{ gap: "10px" }}
              className=" d-flex  align-items-center "
            >
              <div
                style={{ background: "#66ff66" }}
                className="p-2 rounded-circle"
              >
                <IconButton>
                  <People sx={{ color: "#039103" }} />
                </IconButton>
              </div>
              <div>
                <Typography level="h5">1212</Typography>
                <Typography level="body1">Total Users</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="m-auto" style={{ width: "400px", height: "400px" }}>
            <Piez />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="m-auto" style={{ width: "400px", height: "400px" }}>
            <Piez />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
