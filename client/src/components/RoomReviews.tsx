import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Rating } from "@mui/material";
import CommentBox, { Comment } from "./CommentBox.tsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 20px",
  },
}));

type RoomReviewProps = {
  reviews: {
    profilePic?: string;
    firstName?: string;
    lastName?: string;
    rating?: number;
    comment?: string;
    timestamp?: string;
  }[];
};

const RoomReview: React.FC<RoomReviewProps> = ({ reviews }) => {
  const classes = useStyles();

  const handleAddComment = (comment: Comment) => {
    console.log(comment);
    // Do something with the new comment, like sending it to a server
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>
      <CommentBox onAddComment={handleAddComment} />
      {reviews.map((review, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardHeader
            title={`${review.firstName} ${review.lastName || ""}`}
            subheader={review.timestamp || ""}
            avatar={
              <img
                src={review.profilePic || ""}
                alt="user avatar"
                style={{ width: "48px", height: "48px", borderRadius: "50%" }}
              />
            }
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {review.comment || "No comment"}
            </Typography>
            <Rating
              name="rating"
              value={review.rating || 5}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RoomReview;
