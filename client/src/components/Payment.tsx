import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const PaymentCard = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [zip, setZip] = useState(null);
  const [country, setCountry] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event: Event): void => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h6" gutterBottom>
          Enter Payment Details
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            InputProps={{
              inputProps: { maxLength: 16 },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Expiry Date (MM/YYYY)"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            InputProps={{
              inputProps: { maxLength: 5 },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="CVV"
            value={cvv}
            onChange={handleCvvChange}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="ZIP code"
            value={zip}
            onChange={handleZipChange}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Country/region"
            value={country}
            onChange={handleCountryChange}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <Button
            variant="contained"
            style={{
              color: "white",
              fontStyle: "bold",
              fontWeight: "700",
              background: "black",
              width: "20vh",
            }}
            onClick={(e: any) => {
              handleSubmit(e);
            }}
          >
            PAY NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentCard;
