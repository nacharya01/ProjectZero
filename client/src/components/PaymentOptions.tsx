import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { AttachMoney, Schedule, Payment } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "16px",
  },
  outlined: {
    border: `3px solid green`,
  },
});

interface options {
  bnplText: string;
  advantagesBnpl: Array<any>;
  fullPayText: string;
  advantagesFull: Array<any>;
}

const PaymentOptions = (props: { options: options }) => {
  const { options } = props;

  const [checkedBuyNowPaylater, setCheckedBuyNowPaylater] = useState(false);
  const [checkedPayFull, setCheckedPayFull] = useState(true);

  const classes = useStyles();

  const handleChange = () => {
    setCheckedBuyNowPaylater(!checkedBuyNowPaylater);
    setCheckedPayFull(!checkedPayFull);
  };

  const handleFullPay = () => {
    setCheckedPayFull(!checkedPayFull);
    setCheckedBuyNowPaylater(!checkedBuyNowPaylater);
  };

  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={12}
        md={6}
        className={`${classes.root} ${
          checkedBuyNowPaylater && !checkedPayFull ? classes.outlined : ""
        }`}
      >
        <div style={{ backgroundColor: "#f8f8f8", padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Buy Now, Pay Later
          </Typography>
          <Typography variant="body1" gutterBottom>
            {options.bnplText}
          </Typography>
          {options.advantagesBnpl.map((adv) => {
            return (
              <Typography variant="body1" gutterBottom>
                <IconButton>
                  {adv.title.indexOf("Flexible") !== -1 && <Schedule />}
                  {adv.title.indexOf("interest") !== -1 && <AttachMoney />}
                </IconButton>
                <strong>{adv.title}</strong> {adv.detail}
              </Typography>
            );
          })}
          <Typography variant="body1" gutterBottom>
            <Checkbox
              checked={checkedBuyNowPaylater}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={`${classes.root} ${
          checkedPayFull && !checkedBuyNowPaylater ? classes.outlined : ""
        }`}
      >
        <div style={{ backgroundColor: "#f8f8f8", padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Pay in Full
          </Typography>
          <Typography variant="body1" gutterBottom>
            {options.fullPayText}
          </Typography>
          {options.advantagesFull.map((adv, index) => {
            return (
              <Typography variant="body1" gutterBottom key={index}>
                <IconButton>
                  {adv.title.indexOf("Secure") !== -1 && <Payment />}
                  {adv.title.indexOf("interest") !== -1 && <AttachMoney />}
                </IconButton>
                <strong>{adv.title}</strong> {adv.detail}
              </Typography>
            );
          })}
          <Typography variant="body1" gutterBottom>
            <Checkbox
              checked={checkedPayFull}
              onChange={handleFullPay}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default PaymentOptions;
