import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderLeft: "1px solid lightgrey",
    overflow: "scroll",
  },
  item: {
    padding: "20px",
    borderBottom: "1px solid lightgrey",
    display: "flex",
  },
  image: {
    height: "150px",
    width: "250px",
    marginRight: "20px",
  },
});

export default function RoomList(props) {
  const classes = useStyles();
  const { rooms } = props;

  return (
    <List className={classes.root}>
      {rooms.map((room, index) => (
        <ListItem className={classes.item} key={index}>
          <img src={room.image} className={classes.image} alt="" />
          <ListItemText>
            <Typography variant="h6">{room.name}</Typography>
            <Typography variant="body2">{room.price}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
