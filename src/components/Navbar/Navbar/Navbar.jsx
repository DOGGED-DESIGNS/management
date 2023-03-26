import { useState } from "react";
import "./Navbar.scss";
import "../../../App.css";
import Image from "../../../constants";
import { NavLink } from "react-router-dom";
import {
  Button,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Fade,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  FeedOutlined,
  Home,
  NotificationAdd,
  PowerOffOutlined,
  AccountCircle,
  NotificationsOutlined,
  ExitToAppOutlined,
  FeedbackOutlined,
  SearchOutlined,
  Close,
} from "@mui/icons-material";
import { width } from "@mui/system";

const Navbar = () => {
  const [toggle, setToggle] = useState(1);
  const [search, setSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {!search && (
        <nav className="nav p-3">
          <div className=" align-items-center d-flex justify-content-between container">
            <NavLink to={"/home"}>
              <div className="nav__logo">
                <img src={Image.Logo} alt="logo" />
              </div>
            </NavLink>
            <div className="nav__button">
              <Button
                variant={toggle == 1 ? "contained" : "text"}
                onClick={() => {
                  setToggle(1);
                }}
                className={toggle == 1 ? "bat" : "text-black-50"}
                startIcon={<Home />}
              >
                Home
              </Button>
              <Button
                variant={toggle == 2 ? "contained" : "text"}
                onClick={() => {
                  setToggle(2);
                }}
                className={toggle == 2 ? "bat" : "text-black-50"}
                startIcon={<AccountCircle fontSize="small" />}
              >
                Profile
              </Button>
              <Button
                variant={toggle == 3 ? "contained" : "text"}
                onClick={() => {
                  setToggle(3);
                }}
                className={toggle == 3 ? "bat" : "text-black-50 "}
                startIcon={<FeedbackOutlined />}
              >
                Feedback
              </Button>
            </div>

            <div style={{ width: "100px" }} className=" nav__icons ">
              <IconButton className=" ">
                <SearchOutlined
                  onClick={() => {
                    setSearch(true);
                  }}
                />
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
              <div>
                <IconButton
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    sx={{ width: "24px", height: "24px" }}
                    sizes="small"
                  />{" "}
                </IconButton>{" "}
                <span style={{ color: "#00311d" }}>Uzoechi</span>
              </div>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToAppOutlined fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </nav>
      )}

      {search && (
        <nav className="nav p-3">
          <div className=" align-items-center d-flex justify-content-between container">
            <NavLink to={"/home"}>
              <div className="nav__logo">
                <img src={Image.Logo} alt="logo" />
              </div>
            </NavLink>
            <div className="mx-2 justify-content-around nav__button">
              <Button
                variant={toggle == 1 ? "contained" : "text"}
                onClick={() => {
                  setToggle(1);
                }}
                className={toggle == 1 ? "bat" : "text-black-50"}
              >
                <Home />
              </Button>
              <Button
                variant={toggle == 2 ? "contained" : "text"}
                onClick={() => {
                  setToggle(2);
                }}
                className={toggle == 2 ? "bat" : "text-black-50"}
              >
                <AccountCircle fontSize="small" />
              </Button>
              <Button
                variant={toggle == 3 ? "contained" : "text"}
                onClick={() => {
                  setToggle(3);
                }}
                className={toggle == 3 ? "bat" : "text-black-50 "}
              >
                <FeedbackOutlined />
              </Button>
            </div>
            <div className="mx-3" style={{ width: "800px" }}>
              <TextField
                variant="outlined"
                placeholder="search"
                sx={{ width: "100%" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setSearch(false);
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div style={{ width: "100px" }} className=" nav__icons ">
              {!search && (
                <IconButton className=" ">
                  <SearchOutlined />
                </IconButton>
              )}
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
              <div>
                <IconButton
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    sx={{ width: "24px", height: "24px" }}
                    sizes="small"
                  />{" "}
                </IconButton>{" "}
                <span style={{ color: "#00311d" }}>Uzoechi</span>
              </div>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToAppOutlined fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </nav>
      )}

      {/* this is the small nav */}

      <nav className="nav2 p-3">
        <div className=" align-items-center d-flex justify-content-between container ">
          <NavLink to={"/home"}>
            <div className="nav2__logo">
              <img src={Image.Logo} alt="logo" />
            </div>
          </NavLink>
          {!search && (
            <div className="mx-2 justify-content-around nav2__button">
              <Button
                size="small"
                variant={toggle == 1 ? "contained" : "text"}
                onClick={() => {
                  setToggle(1);
                }}
                className={toggle == 1 ? "bat" : "text-black-50"}
              >
                <Home fontSize="small" />
              </Button>
              <Button
                size="small"
                variant={toggle == 2 ? "contained" : "text"}
                onClick={() => {
                  setToggle(2);
                }}
                className={toggle == 2 ? "bat" : "text-black-50"}
              >
                <AccountCircle fontSize="small" />
              </Button>
              <Button
                size="small"
                variant={toggle == 3 ? "contained" : "text"}
                onClick={() => {
                  setToggle(3);
                }}
                className={toggle == 3 ? "bat" : "text-black-50 "}
              >
                <FeedbackOutlined fontSize="small" />
              </Button>
            </div>
          )}

          {search && (
            <div className=" mx-3" style={{ width: "300px" }}>
              <TextField
                variant="outlined"
                placeholder="search"
                sx={{ width: "100%" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setSearch(false);
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          )}

          <div
            style={{ width: "400px" }}
            className=" align-items-center  ml-auto nav2__icons "
          >
            {!search && (
              <IconButton className="ml-auto ">
                <SearchOutlined
                  onClick={() => {
                    setSearch(true);
                  }}
                />
              </IconButton>
            )}
            <div className="  ml-auto ">
              <IconButton>
                <Badge variant="dot" color="primary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </div>
            <div className="ml-auto ">
              <IconButton
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar sx={{ width: "24px", height: "24px" }} sizes="small" />{" "}
              </IconButton>{" "}
              {/* <span style={{ color: "#00311d" }}>Uzoechi</span> */}
            </div>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FeedbackOutlined fontSize="small" />
                </ListItemIcon>
                FeedBack
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ExitToAppOutlined fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
