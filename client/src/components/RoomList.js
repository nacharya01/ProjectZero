import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FilterButton from "./FilterButton.js";
import rooms from "../assets/data/rooms.js";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "2em",
    marginInline: "1em",
    boxShadow: "0",
  },
  image: {
    height: "20em",
  },
}));

function RoomCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { room } = props;

  return (
    <div >
      <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          navigate("/RoomDetails");
        }}
      >
        <CardMedia
          className={classes.image}
          image={room.image}
          title={room.name}
        />
        <CardContent>
          <Typography variant="h6" component="p">
            {room.name}
          </Typography>
          <Typography variant="body2" component="p">
            {room.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            2.0 miles away
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {room.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </div>
  );
}

function RoomList() {
  return (
    <Container maxWidth="xl">
      <Box>
        <FilterButton />
      </Box>
      <Grid container spacing={2} >
        {rooms.map((room) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={room.name}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RoomList;
