import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpDialog } from "../actions/DialogAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(0.2),
    width: "90%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
    textTransform: "none",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const openState = useSelector((state) => state.signUpReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch(closeSignUpDialog());
  };

  return (
    <Dialog
      open={openState.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Sign Up"}</DialogTitle>
      <DialogContent>
        <Paper className={classes.root}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoFocus
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Full Address"
              name="address"
              autoFocus
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              color="black"
              className={classes.submit}
              onClick={handleSubmit}
            >
              <GoogleIcon
                sx={{
                  marginRight: 1,
                }}
              />
              Sign up with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              color="black"
              className={classes.submit}
              onClick={handleSubmit}
            >
              <EmailIcon
                sx={{
                  marginRight: 1,
                }}
              />
              Sign up with Email
            </Button>
          </form>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
