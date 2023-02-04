import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: "50%",
    margin: 20,
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
  submit: {
    marginTop: theme.spacing(3),
    textTransform: "none",
  },
}));

export default function BookingCard() {
  const classes = useStyles();

  const handleBooking = (event) => {
    event.preventDefault();
  };

  const enableDatePicker = (id) => {
    document.getElementById(id).setAttribute("type", "date");
  };

  const disableDatePicker = (id) => {
    document.getElementById(id).removeAttribute("type", "date");
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Booking Information
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Fill out the following details:
        </Typography>
        <TextField
          id="checkIn"
          label="Check in"
          variant="outlined"
          fullWidth
          autoFocus
          margin="normal"
          onFocus={() => {
            enableDatePicker("checkIn");
          }}
          onBlur={() => {
            disableDatePicker("checkIn");
          }}
        />
        <TextField
          id="checkOut"
          label="Check out"
          variant="outlined"
          fullWidth
          autoFocus
          margin="normal"
          onFocus={() => {
            enableDatePicker("checkOut");
          }}
          onBlur={() => {
            disableDatePicker("checkOut");
          }}
        />
        <TextField
          id="outlined-basic"
          label="Guests"
          variant="outlined"
          fullWidth
          autoFocus
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          fullWidth
          autoFocus
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          color="primary"
          className={classes.submit}
          onClick={handleBooking}
        >
          Reserve
        </Button>
      </CardContent>
    </Card>
  );
}
