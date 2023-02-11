import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import WifiIcon from "@material-ui/icons/Wifi";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import HotelIcon from "@material-ui/icons/Hotel";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  photobook: {
    borderBottom: "1px solid lightgrey",
  },
  media: {
    height: "55vh",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const photos = [
  {
    url: "https://www.extraspace.com/blog/wp-content/uploads/2020/10/where-to-keep-stuff-airbnb-1000x675.jpg",
    title: "Image 1",
    description: "Bed Room",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/571670a9a3360c1a30ec94a3/755a588b-561d-48e6-a098-4334b233025d/Screen+Shot+2022-03-29+at+11.46.53+AM.png?format=1000w",
    title: "Image 2",
    description: "Bed Room",
  },
  {
    url: "/img/room.jpeg",
    title: "Image 3",
    description: "Bed Room",
  },
];

function Amenities() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary="Room Number" secondary="101" />
              <ConfirmationNumberIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Room Type" secondary="Standard" />
              <RoomIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Max Occupancy" secondary="2" />
              <PersonIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Room Rate" secondary="$100" />
              <AttachMoneyIcon />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6} sm={3}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary="Bed Type" secondary="King" />
              <HotelIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Smoking" secondary="Non-Smoking" />
              <SmokingRoomsIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Wi-Fi" secondary="Free" />
              <WifiIcon />
            </ListItem>
            <ListItem>
              <ListItemText primary="Parking" secondary="Free" />
              <LocalParkingIcon />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}


export default function PhotosCard() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [currentIndex, intervalId]);

  return (
    <div className={classes.root}>
      <div className={classes.photobook}>
        <CardMedia
          className={classes.media}
          image={photos[currentIndex].url}
          title={photos[currentIndex].title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Room1
          </Typography>
        </CardContent>
      </div>
      <Amenities />

    </div>
  );
}
