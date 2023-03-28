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
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
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
import { Textarea } from "@mui/joy";

const Navbar = () => {
  const [toggle, setToggle] = useState(1);
  const [search, setSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openz, setOpenz] = useState(false);
  const [text, setText] = useState("");

  const handleClickz = () => {
    setOpenz(true);
  };

  const handleClosez = () => {
    setOpenz(false);
  };
  // beginning of test

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];

  // end of test
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Dialog open={openz} onClose={handleClosez}>
        <DialogTitle className=" my-3">
          {" "}
          Send your feed back to us and get a prompt response{" "}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText className=" my-3 d-block "></DialogContentText> */}
          <TextField
            sx={{
              width: "100%",
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
      {!search && (
        <nav className="nav p-3">
          <div className=" align-items-center d-flex justify-content-between container">
            <NavLink to={"/home"}>
              <div className="nav__logo">
                <img src={Image.Logo} alt="logo" />
              </div>
            </NavLink>
            <div className="nav__button">
              <NavLink to={"/home"}>
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
              </NavLink>
              <NavLink to={"/profile"}>
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
              </NavLink>
              <NavLink>
                <Button
                  variant={toggle == 3 ? "contained" : "text"}
                  onClick={() => {
                    setToggle(3);
                    handleClickz();
                  }}
                  className={toggle == 3 ? "bat" : "text-black-50 "}
                  startIcon={<FeedbackOutlined />}
                >
                  Feedback
                </Button>
              </NavLink>
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
                    src="https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
            <div className="mx-3" style={{ width: "700px" }}>
              <Autocomplete
                onChange={(event, value) => {
                  console.log(value);
                }}
                size="small"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className="mx-2"
                    sx={{
                      width: "100%",
                    }}
                    {...params}
                    placeholder="search"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlined fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>

            <div
              style={{ width: "250px" }}
              className=" align-items-center nav__icons "
            >
              <div>
                <IconButton className=" ">
                  <SearchOutlined
                    onClick={() => {
                      setSearch(!search);
                    }}
                  />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <NotificationsOutlined />
                  </Badge>
                </IconButton>
              </div>

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
          <NavLink to={"/home"} className=" text-decoration-none">
            <div className="nav2__logo">
              <img src={Image.Logo} alt="logo" />
            </div>
          </NavLink>
          {!search && (
            <div className="mx-2 justify-content-around nav2__button">
              <NavLink className=" text-decoration-none" to={"/home"}>
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
              </NavLink>
              <NavLink className=" text-decoration-none" to={"/profile"}>
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
              </NavLink>
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
            <Autocomplete
              onChange={(event, value) => {
                console.log(value);
              }}
              size="small"
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  size="small"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  className="mx-2"
                  sx={{
                    width: "200px",
                  }}
                  {...params}
                  placeholder="search"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          )}

          {/* {search && (
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
          )} */}

          <div
            style={{ width: "400px" }}
            className=" align-items-center  ml-auto nav2__icons "
          >
            <IconButton className="ml-auto ">
              <SearchOutlined
                onClick={() => {
                  setSearch(!search);
                }}
              />
            </IconButton>

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
