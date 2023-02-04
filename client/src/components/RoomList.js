import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FilterButton from "./FilterButton.js";
import rooms from "../assets/data/rooms.js";
import { useNavigate } from "react-router-dom";

function RoomCard(props) {
  const router = useNavigate();
  const { room } = props;

  return (
    <div>
      <Card
        key={room.id}
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "40vh", marginTop: "5vh", marginInline: "2vh" }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: "35vh" }}
            image={room.image}
            title={room.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {room.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {room.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              router("/RoomDetails");
            }}
          >
            View
          </Button>
          <Button size="small" color="primary">
            Book
          </Button>
        </CardActions>
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
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {rooms.map((room) => (
          <RoomCard item xs={6} md={8} key={room.name} room={room} />
        ))}
      </Grid>
    </Container>
  );
}

export default RoomList;
