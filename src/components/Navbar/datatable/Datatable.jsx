import { useState } from "react";
import "./Datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import "./Datatable.scss";

import { userColumns, userRows } from "../../../datatablesource";
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Delete,
  DetailsOutlined,
  InfoOutlined,
  Update,
} from "@mui/icons-material";

const Datatable = ({ info, link }) => {
  const [open, setOpen] = useState(false);
  const [openz, setOpenz] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickz = () => {
    setOpenz(true);
  };

  const handleClosez = () => {
    setOpenz(false);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              size="small"
              className=" mx-1"
              variant="contained"
              color="secondary"
            >
              <InfoOutlined onClick={handleClickz} size="small" />
            </IconButton>
            <IconButton size="small" className=" mx-1" variant="contained">
              <Update size="small" sx={{ color: "green" }} />
            </IconButton>

            <IconButton
              onClick={handleClick}
              size="small"
              className=" mx-1"
              color="error"
            >
              <Delete size="small" />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" container ">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>

      {/* this is the dialog section */}
      <Dialog open={openz} onClose={handleClosez}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosez}>Cancel</Button>
          <Button onClick={handleClosez}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* this is the end of the dialog section */}

      <div className=" datatable">
        <DataGrid
          className="shadow-sm"
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
