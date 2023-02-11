import React from "react";
import Grid from "@material-ui/core/Grid";
import AboutRoom from "../components/AboutRoom";
import AdditionalRooms from "../components/AdditionalRooms";
import rooms from "../assets/data/rooms";

const RoomDetails = () => {

  return (
    <div>
      <Grid container >
        <Grid item xs={12} sm={8}>
          <AboutRoom />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AdditionalRooms rooms={rooms} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RoomDetails;
