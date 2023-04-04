import { useState } from "react";
import "./Forgot.scss";
import "../../App.css";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
// import TextField from '@material-ui/core/TextField';

import { Button, Typography, TextField } from "@mui/material";

import {
  AccountCircle,
  ArrowBack,
  Email,
  EmailOutlined,
  LockClockOutlined,
  LoginOutlined,
  PersonAdd,
  Send,
  SignLanguageOutlined,
  VisibilityOff,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Forgot = () => {
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
        <div className=" mr-auto my-2">
          <NavLink to={"/"}>
            <IconButton>
              {" "}
              <ArrowBack />{" "}
            </IconButton>
          </NavLink>
        </div>
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
          Verify Your Email
        </Typography>

        <TextField
          sx={{
            width: "100%",
          }}
          size="small"
          type={"text"}
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined fontSize="small" />
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

        <div className="  mt-4 ">
          <CustomBtn className=" my-1" endIcon={<Send />} variant="contained">
            Submit
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
