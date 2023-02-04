import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: "50%",
    minWidth: "48%",
    margin: 20,
  },
  media: {
    height: "55vh",
  },
});

const photos = [
  {
    url: "https://www.extraspace.com/blog/wp-content/uploads/2020/10/where-to-keep-stuff-airbnb-1000x675.jpg",
    title: "Image 1",
    description: "Bed Room",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/571670a9a3360c1a30ec94a3/755a588b-561d-48e6-a098-4334b233025d/Screen+Shot+2022-03-29+at+11.46.53+AM.png?format=1000w",
    title: "Image 2",
    description: "Bed Room",
  },
  {
    url: "/img/room.jpeg",
    title: "Image 3",
    description: "Bed Room",
  },
];

export default function PhotosCard() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Card className={classes.card}>
      <Typography variant="h5" component="h5">
        Photos
      </Typography>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photos[currentIndex].url}
          title={photos[currentIndex].title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {photos[currentIndex].description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
