import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {
  Link,
  Outlet,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faFire, faHotel, faPlane, faCableCar, faParachuteBox, faUmbrellaBeach, faTents, faCity} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop:'1vh',
    padding: '2em',
    borderTop: '1px solid black',
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    textTransform: 'none',
  },
  tabIcon: {
    fontSize: '1.5em',
  }
}));

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
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
              <CustomTab icon={<FontAwesomeIcon icon={faLocationPin} className={classes.tabIcon}/>} label="Nearby" component={Link} to="Maps" />
              <CustomTab icon={<FontAwesomeIcon icon={faFire} className={classes.tabIcon}/>} label="Trending" component={Link} to="RoomList" />
              <CustomTab icon={<FontAwesomeIcon icon={faHotel} className={classes.tabIcon}/>} label="Hotels" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faPlane} className={classes.tabIcon}/>} label="Flights" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faCableCar} className={classes.tabIcon}/>} label="Cable Cars" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faParachuteBox} className={classes.tabIcon}/>} label="Parachute" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faUmbrellaBeach} className={classes.tabIcon}/>} label="Beach" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faTents} className={classes.tabIcon}/>} label="Tents" component={Link} to="/" />
              <CustomTab icon={<FontAwesomeIcon icon={faCity} className={classes.tabIcon}/>} label="City" component={Link} to="/" />
            </Tabs>
          </Box>
          <Outlet />
        </Box>
    </div>
  )
}

export default TabBar;
