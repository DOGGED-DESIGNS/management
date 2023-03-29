import { useState } from "react";
import "./Admin.scss";
import "../../App.css";
import {
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
// import TextField from '@material-ui/core/TextField';

import { Button, Typography, TextField } from "@mui/material";

import {
  AccountCircle,
  CheckBox,
  Email,
  EmailOutlined,
  LockClockOutlined,
  LoginOutlined,
  PersonAdd,
  SignLanguageOutlined,
  VisibilityOff,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [visible, setVisible] = useState(false);

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#00311d",
    },
  });

  return (
    <div className="login ">
      <div className="login__form">
        <Typography
          variant="h4"
          sx={{
            color: "#005a34",
          }}
          className=" font-weight-bold text-center text-capitalize "
        >
          Welcome!
        </Typography>
        <Typography
          variant="span"
          className=" my-3 text-center d-block text-black-50 text-capitalize "
        >
          Start your journey with us today.
        </Typography>

        <TextField
          sx={{
            width: "100%",
          }}
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="password"
          type={visible ? "text" : "password"}
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? (
                    <VisibilityOutlined fontSize="small" />
                  ) : (
                    <VisibilityOffOutlined fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <CustomText
          width={"100%"}
          size="small"
          error={true}
          helperText="this "
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <VisibilityOffOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <div className=" my-2 d-flex w-100 align-items-center">
          <div className=" flex-grow-1">
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            Remember me
          </div>

          <div>
            <NavLink to={"/forgot"} className=" text-decoration-none">
              <span>Forgot Password?</span>
            </NavLink>
          </div>
        </div>

        <div className="  mt-4 ">
          <NavLink to={"/signup"} className="text-decoration-none">
            <CustomBtn
              className=" my-1"
              startIcon={<PersonAdd />}
              variant="contained"
            >
              Sign_Up
            </CustomBtn>
          </NavLink>
          <CustomBtn
            startIcon={<LockClockOutlined />}
            variant="contained"
            className=" my-3"
          >
            Login
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Admin;
