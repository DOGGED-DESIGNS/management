import React from "react";
import "./Login.scss";
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
  EmailOutlined,
  ExitToAppOutlined,
  LockOutlined,
  LoginOutlined,
  SignLanguageOutlined,
  VisibilityOff,
  VisibilityOffOutlined,
} from "@mui/icons-material";

const Login = () => {
  // styled text field

  const CustomText = styled(TextField)({
    input: {
      //   width: "250px",
      display: "block",
    },
    // root: {
    //   border: "1px solid orange",
    //   width: "500px",
    //   "& .MuiOutlinedInput-root": {
    //     height: "40px",
    //   },
    // },
  });
  // end of styled field

  const CustomBtn = styled(Button)({
    background: "#005a34",
    width: "100%",
    "&:hover": {
      background: "#005a34",
    },
  });

  return (
    <div className="login ">
      <div className="login__form">
        <Typography variant="h4" className=" text-black-50 text-capitalize ">
          Welcome!
        </Typography>

        <CustomText
          sx={{
            width: "100%",
            label: {
              color: "orange",
            },
          }}
          label="text"
          size="small"
          className="my-2"
          variant="outlined"
          placeholder="username"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <CustomText
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
                <EmailOutlined />
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

        <OutlinedInput
          size="small"
          label="password"
          sx={{
            width: "100%",
          }}
          id="outlined-adornment-password"
          type={"password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                //   edge="end"
              >
                {<VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />

        <div className="  mt-4 ">
          <CustomBtn
            className=" my-1"
            startIcon={<ExitToAppOutlined />}
            variant="contained"
          >
            SIGNIN
          </CustomBtn>
          <CustomBtn
            startIcon={<LockOutlined />}
            variant="contained"
            className=" my-3"
          >
            lOGIN
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Login;
