import {
  Close,
  DashboardOutlined,
  Description,
  DescriptionOutlined,
  FeedbackOutlined,
  IosShare,
  IosShareOutlined,
  NotificationAdd,
  NotificationsOutlined,
  PeopleOutline,
  PersonRemoveAlt1Outlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Side = ({ turnFalse, toggle }) => {
  const [indexz, setIndexz] = useState(1);
  return (
    <div
      style={{
        display: toggle ? "block" : "none",
        background: "#4d4d4d",
        minHeight: "100vh",
        width: "250px",
      }}
    >
      <div className="d-flex align-items-center  p-3 ">
        <Typography variant="h5" className=" text-white flex-grow-1">
          Admin Panel
        </Typography>
        <IconButton
          onClick={() => {
            turnFalse();
          }}
          className=" text-white "
        >
          {" "}
          <Close />{" "}
        </IconButton>
      </div>
      <List>
        <NavLink
          onClick={() => {
            setIndexz(1);
          }}
          className="text-decoration-none"
          to="/admin/dashboard"
        >
          <ListItem
            selected={indexz == 1 ? true : false}
            className=" active my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <DashboardOutlined className=" text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">Dashboard</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => {
            setIndexz(2);
          }}
          className="text-decoration-none"
          to="/admin/users"
        >
          <ListItem
            selected={indexz == 2 ? true : false}
            className=" my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <PeopleOutline className=" text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">Users</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => {
            setIndexz(3);
          }}
          to={"/admin/feedback"}
          className=" text-decoration-none "
        >
          <ListItem
            selected={indexz == 3 ? true : false}
            className=" my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <FeedbackOutlined className="text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">FeedBack</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => {
            setIndexz(4);
          }}
          className="text-decoration-none"
          to="/admin/notifications"
        >
          <ListItem
            selected={indexz == 4 ? true : false}
            className=" my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <NotificationsOutlined className="text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">Notifications</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => {
            setIndexz(5);
          }}
          className="text-decoration-none"
          to="/admin/deleted"
        >
          <ListItem
            selected={indexz == 5 ? true : false}
            stItem
            className=" my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <PersonRemoveAlt1Outlined className="text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">Deleted Users</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => {
            setIndexz(6);
          }}
          className="text-decoration-none"
          to="/admin/notes"
        >
          <ListItem
            selected={indexz == 6 ? true : false}
            className=" my-2 "
            divider={true}
            button
          >
            <ListItemIcon>
              <DescriptionOutlined className="text-white" />
            </ListItemIcon>
            <ListItemText className=" text-white">Notes</ListItemText>
          </ListItem>
        </NavLink>
        <ListItem className=" my-2 " divider={true} button>
          <ListItemIcon>
            <IosShareOutlined className="text-white" />
          </ListItemIcon>
          <ListItemText className=" text-white">Export</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default Side;
