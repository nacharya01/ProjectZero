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
import { closeLoginDialog } from "../actions/action";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3, 2),
    margin: theme.spacing(0.3, 0),
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

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const openState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    dispatch(closeLoginDialog());
  };

  return (
    <Dialog
      open={openState.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Login"}</DialogTitle>
      <DialogContent>
        <Paper className={classes.root}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone number"
              name="phoneNumber"
              autoComplete="phone"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              Sign In
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
              Continue with Google
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
              Continue with Email
            </Button>
          </form>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
