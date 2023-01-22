import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import Carousel from '@material-ui/core/Carousel';
import { images } from "../constants";

function Jumbotron() {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: 2,
        textAlign: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        height: "50vh",
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
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "60%",
            borderRadius: '100px'
          }}
        >
          <InputBase
            sx={{
              marginLeft: 2,
              flex: 1,
              height: "6vh",
            }}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <IconButton sx={{border: '1px solid', width: '10vh', borderRadius: '100px'}}>
            <SearchIcon sx={{ color: "black", fontWeight: "500" }} />
          </IconButton>
        </Paper>
      </Box>
    </Paper>
  );
}

export default Jumbotron;
