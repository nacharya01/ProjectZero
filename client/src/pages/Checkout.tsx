import PriceDetails from "../components/PriceDetails.tsx";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Payment from "../components/Payment.tsx";
import DiscountCard from "../components/Discount.tsx";
import { Divider } from "@material-ui/core";
import PaymentOption from "../components/PaymentOptions.tsx";
import checkout from "../assets/data/checkout";

export default function Checkout() {
  const onBookNowClick = () => {
    console.log("Book now is clicked");
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
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
        <Grid item xs={12} sm={5}>
          <PriceDetails details={checkout.priceDetails} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12}>
          <PaymentOption options={checkout.paymentOptions} />
        </Grid>
      </Grid>
    </div>
  );
}
