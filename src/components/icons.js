import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 0.5)
    }
  }
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <a href="https://www.facebook.com/" target="_blank">
          {" "}
          <FacebookIcon color="primary" />{" "}
        </a>

        <Divider orientation="vertical" flexItem />
        <a href="https://web.whatsapp.com/" target="_blank">
          {" "}
          <WhatsAppIcon style={{ color: "#25D366" }} />{" "}
        </a>
      </Grid>
    </div>
  );
}
