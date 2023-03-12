import React from "react";
import { Paper, Box, InputBase, IconButton, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { Icon } from "@material-ui/core";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const useStyles = makeStyles({
  customDatePicker: {
    "& .MuiInputBase-root": {
      width: "12em",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none", // Hide the notched outline
    },
  },
});

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: "blue",
}));

function Jumbotron() {
  const classes = useStyles();

  const [search, setSearch] = React.useState("");
  const [checkIn, setCheckIn] = React.useState(dayjs());
  const [checkOut, setCheckOut] = React.useState(dayjs().add(1, "day"));
  const [numOfGuests, setNumOfGuests] = React.useState("");

  const today = dayjs();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleNumOfGuests = (e) => {
    setNumOfGuests(e.target.value);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: "10px",
        textAlign: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        height: "50vh",
        boxShadow: "none",
      }}
    >
      <h1>Welcome to ZERO!</h1>
      <p>Search your next destination</p>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            borderRadius: "100px",
            height: "4em",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <InputBase
            sx={{
              flex: 1,
              padding: "2em",
            }}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <Divider orientation="vertical" flexItem />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // label="Check-In"
              format="MMM D"
              inputFormat="MMM D"
              openTo="day"
              defaultValue={checkIn}
              onChange={handleCheckInChange}
              minDate={today}
              className={classes.customDatePicker}
              InputLabelProps={{ shrink: true }}
            />
            <StyledIcon
              className="material-symbols-outlined"
              sx={{ color: "gray" }}
            >
              arrow_right_alt
            </StyledIcon>
            <DatePicker
              // label="Check-Out"
              format="MMM D"
              inputFormat="MMM D"
              openTo="day"
              defaultValue={checkOut}
              onChange={handleCheckOutChange}
              minDate={checkIn}
              className={classes.customDatePicker}
              InputLabelProps={{ shrink: true }}
            />
          </LocalizationProvider>
          <Divider orientation="vertical" flexItem />
          <InputBase
            placeholder="2 Guests"
            value={numOfGuests}
            onChange={handleNumOfGuests}
            sx={{
              padding: "1em",
              width: "8em",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <IconButton
            sx={{
              width: "3em",
              borderRadius: "0 3em 3em 0",
              height: "inherit",
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "40px",
                borderRadius: "50%",
                color: "white",
                background: "black",
                fontWeight: "bold",
                padding: "8px",
              }}
            />
          </IconButton>
        </Paper>
      </Box>
    </Paper>
  );
}

export default Jumbotron;
