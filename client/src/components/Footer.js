import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  footer: {
    boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    marginTop: "12vh",
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(6),
    color: theme.palette.common.black,
  },
  footerLinks: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}));

function Footer() {
  const classes = useStyles();

  const companyLinks = [
    { text: "About us", link: "/link1" },
    { text: "Partner with us", link: "/link2" },
    { text: "Business", link: "/link3" },
    { text: "Careers", link: "/link4" },
  ];

  const helpCenterLinks = [
    { text: "Customer Support Chat", link: "/link5" },
    { text: "00-0000-0000", link: "/link6" },
    { text: "zero@zero.com", link: "/link7" },
  ];

  const joinNetworkLinks = [{ text: "List your property", link: "/link9" }];

  const downloadLinks = [
    { text: "Android", link: "/link13" },
    { text: "IOS", link: "/link14" },
  ];

  return (
    <footer className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <List>
            {companyLinks.map((link) => (
              <a href={link.link} className={classes.footerLinks}>
                <ListItemText primary={link.text} />
              </a>
            ))}
          </List>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Help Center
          </Typography>
          <List>
            {helpCenterLinks.map((link) => (
              <a href={link.link} className={classes.footerLinks}>
                <ListItemText primary={link.text} />
              </a>
            ))}
          </List>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Join our network!
          </Typography>
          <List>
            {joinNetworkLinks.map((link) => (
              <a href={link.link} className={classes.footerLinks}>
                <ListItemText primary={link.text} />
              </a>
            ))}
          </List>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Download our apps
          </Typography>
          <List>
            {downloadLinks.map((link) => (
              <a href={link.link} className={classes.footerLinks}>
                <ListItemText primary={link.text} />
              </a>
            ))}
          </List>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
