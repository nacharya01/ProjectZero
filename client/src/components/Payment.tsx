import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const PaymentCard = () => {
  const handleSubmit = (event: Event): void => {
    event.preventDefault();
  };

  const [cardNumber, setCardNumber] = useState(null);
  const [nameOnCard, setNameOnCard] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [zip, setZip] = useState(null);
  const [fullName, setFullName] = useState(null);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      style={{ marginLeft: "1rem" }}
    >
      <Grid item>
        <Typography variant="h6" gutterBottom>
          Enter Payment Details
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={11} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Card Number"
            value={cardNumber}
            InputProps={{
              inputProps: { maxLength: 16 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name on Card"
            value={nameOnCard}
          />
        </Grid>
        <Grid item xs={11} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Expiry Date"
            value={expiryDate}
            InputProps={{
              inputProps: { maxLength: 5 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <TextField
            fullWidth
            variant="outlined"
            label="CVV"
            value={cvv}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Zip"
            value={zip}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            value={fullName}
            InputProps={{
              inputProps: { maxLength: 3 },
            }}
          />
        </Grid>
        <Grid item xs={11} sm={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e: any) => {
              handleSubmit(e);
            }}
          >
            Pay
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentCard;
