import React, { useState, useEffect } from "react";
import { Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import RoomReviews from "./RoomReviews.tsx";
import reviews from "../assets/data/reviews";
import Button from "@material-ui/core/Button";
import photos from "../assets/data/photos";
import { useNavigate } from "react-router-dom";

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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  reservecard: {
    minWidth: 275,
  },
  amenityContainer: {
    padding: "20px",
  },
  amenityIcon: {
    marginRight: "20px",
    fontSize: "1.5em",
    color: "#454545",
  },
  amenityText: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginLeft: "1em",
    color: "#454545",
  },
  button: {
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    textTransform: "capitalize",
    padding: "10px 20px",
    boxShadow: "none",
    marginLeft: "-1.5rem",
  },
}));

function Amenities() {
  const classes = useStyles();

  return (
    <div className={classes.amenityContainer}>
      <Typography variant="h5" gutterBottom>
        What this place offers?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <List className={classes.list}>
            <ListItem>
              <Icon className="material-symbols-outlined">imagesmode</Icon>
              <ListItemText
                primary="Great outdoor view"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">wifi</Icon>
              <ListItemText
                primary="24/7 Wi-Fi"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">tv</Icon>
              <ListItemText
                primary='65" HDTV with Netflix, Roku'
                className={classes.amenityText}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4}>
          <List className={classes.list}>
            <ListItem>
              <Icon className="material-symbols-outlined">ac_unit</Icon>
              <ListItemText
                primary="Central AC/Heat"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">directions_car</Icon>
              <ListItemText
                primary="Free parking on premises"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">
                local_laundry_service
              </Icon>
              <ListItemText
                primary="In-House Laundry Service"
                className={classes.amenityText}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4}>
          <List className={classes.list}>
            <ListItem>
              <Icon className="material-symbols-outlined">
                nest_cam_outdoor
              </Icon>
              <ListItemText
                primary="Security cameras om property"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">chair</Icon>
              <ListItemText
                primary="Fine Furniture"
                className={classes.amenityText}
              />
            </ListItem>
            <ListItem>
              <Icon className="material-symbols-outlined">pets</Icon>
              <ListItemText
                primary="Pets Allowed"
                className={classes.amenityText}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default function PhotosCard() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 3000);
    setIntervalId(id);
    setTimeout(() => clearInterval(intervalId), 3100);
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
          <Typography variant="h5" color="textPrimary" component="p">
            Room1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Shenandoah Retreat is a 3-bedroom, 3.5 Bathroom, 2,630 sq ft,
            private log cabin with modern interior, nestled in the heart of
            Shenandoah Valley.Located less than 15 miles from the National Park,
            this 2 story cabin sleeps 10 people and is designed to provide you
            an amazing escape in the Shenandoah Valley. Come enjoy a warm cup of
            coffee on the large deck overlooking the onsite pond, or a dip in
            the hot tub to relax after a long day of skiing or hiking. This
            large cabin is ready to host you! Large dining room right off the
            kitchen with a large dining table and buffett. There is a bluetooth
            and record digital audio system near the kitchen bar area
          </Typography>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/Checkout");
              }}
            >
              Reserve Now
            </Button>
          </div>
        </CardContent>
      </div>
      <Amenities />
      <RoomReviews reviews={reviews} />
    </div>
  );
}
