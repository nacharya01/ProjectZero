import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  filterButton: {
    marginTop: '1rem',
    marginLeft: '1rem'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function FilterButton() {
  const classes = useStyles();
  const [location, setLocation] = useState("all");
  const [price, setPrice] = useState("all");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleLocationChange(event) {
    const value = event.target.value;
    setLocation(value);
  }

  function handlePriceChange(event) {
    const value = event.target.value;
    setPrice(value);
  }

  function handleApply() {
    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.filterButton}
        onClick={handleClickOpen}
      >
        <FontAwesomeIcon color="black" icon={faSliders} size="2x" />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Filter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the filter options you want to apply
          </DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              onChange={handleLocationChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"new-york"}>New York</MenuItem>
              <MenuItem value={"los-angeles"}>Los Angeles</MenuItem>
              <MenuItem value={"chicago"}>Chicago</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              onChange={handlePriceChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"low"}>Low</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"high"}>High</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleApply} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
