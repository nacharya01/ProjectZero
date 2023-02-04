import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PhotosCard from "../components/PhotosCard";
import WifiIcon from "@material-ui/icons/Wifi";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import HotelIcon from "@material-ui/icons/Hotel";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import BookingCard from "../components/BookRoom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: "100vh",
    borderRadius: 20,
  },
  divCard: {
    display: "flex",
    flexDirection: "row",
  },
}));

const RoomDetails = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divCard}>
        <PhotosCard />
        <BookingCard />
      </div>

      <Paper className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List component="nav" className={classes.list}>
              <ListItem button>
                <ListItemText primary="Room Number" secondary="101" />
                <ConfirmationNumberIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Room Type" secondary="Standard" />
                <RoomIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Max Occupancy" secondary="2" />
                <PersonIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Room Rate" secondary="$100" />
                <AttachMoneyIcon />
              </ListItem>
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List component="nav" className={classes.list}>
              <ListItem button>
                <ListItemText primary="Bed Type" secondary="King" />
                <HotelIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Smoking" secondary="Non-Smoking" />
                <SmokingRoomsIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Wi-Fi" secondary="Free" />
                <WifiIcon />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Parking" secondary="Free" />
                <LocalParkingIcon />
              </ListItem>
              <Divider />
            </List>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default RoomDetails;
