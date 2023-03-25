import { useState } from "react";
import "./Navbar.scss";
import "../../../App.css";
import {
  Button,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import {
  FeedOutlined,
  Home,
  NotificationAdd,
  PowerOffOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  const [toggle, setToggle] = useState(1);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="nav p-3">
      <div className="logo"></div>
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
          startIcon={<PowerOffOutlined />}
        >
          Profile
        </Button>
        <Button
          variant={toggle == 3 ? "contained" : "text"}
          onClick={() => {
            setToggle(3);
          }}
          className={toggle == 3 ? "bat" : "text-black-50 "}
          startIcon={<FeedOutlined />}
        >
          Feedback
        </Button>
      </div>

      <div className="  d-flex">
        <IconButton>
          <NotificationAdd />
        </IconButton>
        <IconButton>
          <NotificationAdd />
        </IconButton>
        <IconButton
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar sizes="small" />
        </IconButton>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
