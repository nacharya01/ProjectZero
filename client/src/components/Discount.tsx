import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Timer as TimerIcon, FlashOn as FlashOnIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    marginLeft: "1rem",
    marginTop: "1rem",
    maxWidth: 770,
  },
  hurryUpIcon: {
    marginRight: 5,
  },
  discountIcon: {
    marginLeft: 5,
  },
});

type discountProps = {
  discount: {
    discountPercentage: "10";
    daysLeft: "5";
  };
};

function DiscountCard(props: discountProps) {
  const classes = useStyles();
  const { discount } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Hurry up!</Typography>
          </Grid>
          <Grid item container alignItems="center" spacing={1}>
            <Grid item>
              <TimerIcon className={classes.hurryUpIcon} />
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Only {discount.daysLeft} days left to save{" "}
                {discount.discountPercentage}
                %!
              </Typography>
            </Grid>
            <Grid item>
              <FlashOnIcon color="secondary" className={classes.discountIcon} />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Casey is offering a 1-time discount for your trip dates. Book soon
              to get this special offer.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DiscountCard;
