import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import Box from '@mui/material/Box';
import {
  Link,
  Outlet,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faFire, faHotel, faPlane, faCableCar, faParachuteBox, faUmbrellaBeach, faTents, faCity} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '25px',
    flexGrow: 1,
    marginTop: '4vh',
  },
}));

function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={classes.root}>
        <Box sx={{ width: '100%' }}>
          <Box >
            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            color="black"
            >
              <Tab icon={<FontAwesomeIcon icon={faLocationPin} size="2x"/>} label="Nearby" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faFire} size="2x"/>} label="Trending" component={Link} to="RoomList" />
              <Tab icon={<FontAwesomeIcon icon={faHotel} size="2x"/>} label="Hotels" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faPlane} size="2x"/>} label="Flights" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faCableCar} size="2x"/>} label="Cable Cars" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faParachuteBox} size="2x"/>} label="Parachute" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faUmbrellaBeach} size="2x"/>} label="Beach" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faTents} size="2x"/>} label="Tents" component={Link} to="/" />
              <Tab icon={<FontAwesomeIcon icon={faCity} size="2x"/>} label="City" component={Link} to="/" />
            </Tabs>
          </Box>
          <Outlet />
        </Box>
    </div>
  )
}

export default TabBar;
