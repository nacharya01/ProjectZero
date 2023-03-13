import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Box,
  Icon,
} from "@material-ui/core";
import rooms from "../assets/data/rooms";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    marginBottom: theme.spacing(4),
    overflow: "hidden",
  },
  media: {
    paddingTop: "25%",
    width: "30%",
    float: "left",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    borderRadius: "7px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  reviews: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  protection: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0.5),
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardHeader: {
    marginLeft: "-1rem",
    marginTop: "-2rem",
  },
  priceDetailsField: {
    textDecoration: "underline",
    marginTop: "0.4rem",
  },
  total: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
  },
}));

type detailsProps = {
  details: {
    title: string;
    avgRev: number;
    totalReview: number;
    imageTitle: string;
    protection: string;
    days: number;
    costPerNight: number;
    specialOffer: number;
    cleaningFee: number;
    serviceFee: number;
    taxes: number;
    total?: number;
  };
};
const PriceDetails = (props: detailsProps) => {
  const classes = useStyles();

  const { details } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={rooms[0].image}
        title="Example Image"
      />
      <CardContent className={classes.content}>
        <div>
          <Typography
            variant="body2"
            component="p"
            style={{ fontWeight: "700", fontStyle: "bold" }}
          >
            {details.title}
          </Typography>
          <div className={classes.reviews}>
            <Typography variant="subtitle2" color="textSecondary">
              {/* {details.imageTitle} */}
            </Typography>
            <Icon
              style={{ fontSize: "0.8em" }}
              className="material-symbols-outlined"
            >
              star
            </Icon>
            <Typography variant="subtitle2" color="textSecondary">
              {details.avgRev}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              ({details.totalReview} reviews)
            </Typography>
          </div>
        </div>
      </CardContent>
      {/* <Divider className={classes.divider} />
      <div className={classes.protection}>
        <Typography variant="body2" color="textSecondary">
          {details.protection}
        </Typography>
      </div> */}
      <Divider className={classes.divider} />
      <CardContent>
        <CardHeader title="Price Details" className={classes.cardHeader} />
        <div className={classes.details}>
          <Typography variant="body1">
            ${details.costPerNight} x {details.days} nights
          </Typography>
          <Typography variant="body1">
            ${details.costPerNight * details.days}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body1" className={classes.priceDetailsField}>
            Special Offer
          </Typography>
          <Typography variant="body1">- ${details.specialOffer}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body1" className={classes.priceDetailsField}>
            Cleaning Fee
          </Typography>
          <Typography variant="body1">${details.cleaningFee}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body1" className={classes.priceDetailsField}>
            Service fee
          </Typography>
          <Typography variant="body1">${details.serviceFee}</Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body1" className={classes.priceDetailsField}>
            Taxes
          </Typography>
          <Typography variant="body1">${details.taxes}</Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.details}>
          <Typography
            variant="body1"
            className={classes.priceDetailsField}
            style={{ fontWeight: "bold" }}
          >
            Total (USD)
          </Typography>
          <Typography variant="body1">${details.total}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceDetails;
