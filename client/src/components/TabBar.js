import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Icon } from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    borderRadius: "25px",
    textTransform: "none",
  },
  tabBar: {
    marginTop: "0.5em",
    padding: theme.spacing(1),
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "25px",
    color: theme.palette.common.black,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  tabIcon: {
    fontSize: "0.4em",
    padding: "0",
    width: "3em",
    minWidth: "10em",
  },
}));

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    minWidth: "8em",
    textTransform: "capitalize",
    "&:hover": {
      color: "black",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "black",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "black",
      color: "red",
    },
  })
);

function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ width: "100%" }}>
        <Box className={classes.tabBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            color="black"
          >
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">location_on</Icon>
              }
              label="Nearby"
              component={Link}
              to="Maps"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">whatshot</Icon>}
              label="Trending"
              component={Link}
              to="RoomList"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">new_releases</Icon>
              }
              label="New"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">hotel</Icon>}
              label="Hotels"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">house_boat</Icon>
              }
              label="House Boat"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">villa</Icon>}
              label="Villa"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">camping</Icon>}
              label="Camp House"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">cabin</Icon>}
              label="Cabin"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">apartment</Icon>
              }
              label="Apartment"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">gite</Icon>}
              label="Gite"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">bungalow</Icon>}
              label="Bungalow"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">castle</Icon>}
              label="Castle"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">
                  temple_buddhist
                </Icon>
              }
              label="Temple"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">landscape</Icon>
              }
              label="Moutains"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">chalet</Icon>}
              label="Chalet"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">dining</Icon>}
              label="Dining"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">brunch_dining</Icon>
              }
              label="Brunch"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">beach_access</Icon>
              }
              label="Beach"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">hiking</Icon>}
              label="Hiking"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">surfing</Icon>}
              label="Surfing"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">
                  downhill_skiing
                </Icon>
              }
              label="Skiing"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={<Icon className="material-symbols-outlined">kayaking</Icon>}
              label="Kayaking"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">paragliding</Icon>
              }
              label="Paragliding"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">scuba_diving</Icon>
              }
              label="Scuba Diving"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">bath_outdoor</Icon>
              }
              label="Outdoor Bath"
              component={Link}
              to="/"
            />
            <CustomTab
              icon={
                <Icon className="material-symbols-outlined">sports_golf</Icon>
              }
              label="Golf"
              component={Link}
              to="/"
            />
          </Tabs>
        </Box>
        <Outlet />
      </Box>
    </div>
  );
}

export default TabBar;
