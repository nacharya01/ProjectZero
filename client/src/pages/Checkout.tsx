import React from "react";
import { Divider, Box, Typography, Grid } from "@material-ui/core";
import { CssBaseline, Container } from "@mui/material";
import PriceDetails from "../components/PriceDetails.tsx";
import Payment from "../components/Payment.tsx";
import DiscountCard from "../components/Discount.tsx";
import checkout from "../assets/data/checkout";

export default function Checkout() {
  const onBookNowClick = () => {
    console.log("Book now is clicked");
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box style={{ marginTop: "5em", marginBottom: "1em" }}>
          <Typography variant="h4" component="h3">
            Confirm and pay
          </Typography>
        </Box>
        <Grid item>
          <Divider />
        </Grid>
        <Grid container spacing={8}>
          <Grid item sm={12} md={7}>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <DiscountCard
                  discount={{
                    ...checkout.discount,
                    onBookNowClick: onBookNowClick,
                  }}
                />
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <Payment />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={5}>
            <PriceDetails details={checkout.priceDetails} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
