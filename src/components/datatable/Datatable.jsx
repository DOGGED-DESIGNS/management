import { useState } from "react";
import "./Datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Textarea } from "@mui/joy";

import "./Datatable.scss";

import { userColumns, userRows } from "../../datatablesource";
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
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Add,
  Delete,
  DetailsOutlined,
  InfoOutlined,
  Update,
  UpdateOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const Datatable = ({ info, link }) => {
  const [open, setOpen] = useState(false);
  const [openz, setOpenz] = useState(false);
  const [text, setText] = useState("");

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

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
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
              <InfoOutlined size="small" />
            </IconButton>
            <IconButton size="small" className=" mx-1" variant="contained">
              <UpdateOutlined size="small" sx={{ color: "green" }} />
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
        <DialogTitle className=" my-3"> Add you notes here</DialogTitle>
        <DialogContent>
          {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}
          <TextField
            sx={{
              width: "400px",
              display: "block",
            }}
            autoFocus
            className=" my-2"
            size="small"
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />

          <Textarea
            placeholder="Type in here…"
            value={text}
            onChange={(event) => setText(event.target.value)}
            minRows={2}
            maxRows={4}
            endDecorator={
              <Typography level="body3" sx={{ ml: "auto" }}>
                {text.length} character(s)
              </Typography>
            }
            sx={{ minWidth: 300 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosez}>Cancel</Button>
          <Button onClick={handleClosez}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* this is the end of the dialog section */}

      <div className=" datatable">
        <div
          className=" p-3 my-3  shadow-sm "
          style={{ background: "whitesmoke" }}
        >
          <Button
            startIcon={<Add />}
            size="small"
            onClick={handleClickz}
            className=" d-flex ml-auto "
            variant="contained"
          >
            Add_note
          </Button>
        </div>
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
