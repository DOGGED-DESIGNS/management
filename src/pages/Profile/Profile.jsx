import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../App.css";
import "./Profile.scss";
import { PhotoCamera } from "@mui/icons-material";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <div className=" mt-5 border profile ">
          <Paper className="w-100">
            <Tabs
              className=" mr-auto"
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label=" Profile" />
              <Tab label="Edit Profile" />
              <Tab label="Change Password" />
            </Tabs>
          </Paper>{" "}
          <div className=" " style={{ height: "auto" }}>
            <div className={value == 0 ? "row  p-3 mt-3 " : "d-none"}>
              <div className="  col-lg-6 col-md-6 col-sm-12">
                <List components="button">
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Name: </span> uzoechi
                      Jeremiah
                    </ListItemText>
                  </ListItem>
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Name: </span> uzoechi
                      Jeremiah
                    </ListItemText>
                  </ListItem>
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Name: </span> uzoechi
                      Jeremiah
                    </ListItemText>
                  </ListItem>
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Name: </span> uzoechi
                      Jeremiah
                    </ListItemText>
                  </ListItem>
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Name: </span> uzoechi
                      Jeremiah
                    </ListItemText>
                  </ListItem>
                  <ListItem divider={true}>
                    <ListItemText>
                      <span className=" font-weight-bold">Email: </span>{" "}
                      uzoechijeremiah@gmail.com
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <Button variant="text" edge="end" aria-label="comments">
                        verify
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm12">
                <div className="profile-img shadow-sm p-3 ">
                  <img
                    src="https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="user image"
                  />
                </div>
              </div>
            </div>

            {/* this is the edit prfile section */}
            <div className={value == 1 ? "row  p-3 mt-3 " : "d-none"}>
              <div className="  col-lg-6 col-md-6 col-sm-12">
                <div className="profile-img shadow-sm p-3 ">
                  <img
                    src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg"
                    alt="user image"
                  />
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm12">
                <div>
                  <span className=" text-black-50">upload profile image</span>
                  <input
                    accept="image/*"
                    className=" d-none"
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <TextField
                    size="small"
                    label="name"
                    className="my-3"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    size="small"
                    label="name"
                    className="my-2"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <FormControl className=" my-2 " sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">Room</InputLabel>
                    <Select
                      size="small"
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Room"
                    >
                      <MenuItem value={1}>one</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    type={"date"}
                    className="my-3"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />

                  <Button
                    variant="contained"
                    className="mt-3"
                    sx={{ width: "100%" }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <div className={value == 2 ? "row  p-3 mt-3 " : "d-none"}>
              <div className="  col-lg-6 col-md-6 col-sm-12">
                <div>
                  <TextField
                    size="small"
                    label="current password"
                    className="my-3"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    size="small"
                    label="new password"
                    className="my-3"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    size="small"
                    label="confirm your new password"
                    className="my-2"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />

                  <Button
                    variant="contained"
                    className="mt-3"
                    sx={{ width: "100%" }}
                  >
                    Update Password
                  </Button>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm12">
                <div className="profile-img shadow-sm p-3 ">
                  <img
                    src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7866.jpg"
                    alt="user image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
