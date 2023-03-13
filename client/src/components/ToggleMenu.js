import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Map } from "@material-ui/icons";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  toggleButton: {
    marginTop: "1rem",
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: "1em",
    color: "#454545",
  },
}));

function ToggleMenu() {
  const classes = useStyles();
  const [view, setView] = useState("list");

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        className={classes.toggleButton}
      >
        <ToggleButton value="list" aria-label="list">
          <List className={classes.icon} />
        </ToggleButton>
        <ToggleButton value="map" aria-label="map">
          <Map className={classes.icon} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleMenu;
