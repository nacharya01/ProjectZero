import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Rating, Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  commentBox: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  commentContainer: {
    flexDirection: "column",
    marginLeft: "20px",
    width: "100%",
  },
  commentTextField: {
    marginTop: "10px",
    width: "100%",
  },
  ratings: {
    marginBottom: "20px",
  },
}));

export interface Comment {
  id: number;
  author: string;
  text: string;
  rating: number;
}

interface CommentBoxProps {
  onAddComment: (comment: Comment) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onAddComment }) => {
  const classes = useStyles();

  const [text, setText] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    value: number | null
  ) => {
    setRating(value);
  };

  const handleAddComment = () => {
    const newComment: Comment = {
      id: Date.now(),
      author: "John Doe",
      text: text,
      rating: rating || 1,
    };
    onAddComment(newComment);
    setText("");
    setRating(null);
  };

  return (
    <div className={classes.commentBox}>
      <Avatar alt="User Avatar" src="https://picsum.photos/200/300" />
      <div className={classes.commentContainer}>
        <Rating
          className={classes.ratings}
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        />
        <TextField
          label="Review"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          multiline
          rows={4}
          className={classes.commentTextField}
        />
        <Button
          sx={{ marginTop: "1.5em", marginLeft: "auto" }}
          variant="contained"
          color="primary"
          onClick={handleAddComment}
        >
          Add Review
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
