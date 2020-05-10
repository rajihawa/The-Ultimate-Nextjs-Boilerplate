import React from "react";
import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      background: "#3d0081"
    },
    line: {
      width: "100%",
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      borderBottom: "3px solid " + orange[400]
    },
    Icon: {
      margin: theme.spacing(0, 1, 0, 0)
    }
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.line} />
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Box display="flex" alignItems="center">
            <PhoneIcon
              className={classes.Icon}
              color="secondary"
              fontSize="large"
            />
            <Typography variant="h6" color="secondary">
              054-6299985 / 072-2733993
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <a rel="noopener" href="mailto:info@edrsoft.com" target="_blank">
              <IconButton aria-label="facebook link" component="span">
                <MailIcon color="secondary" fontSize="large" />
              </IconButton>
            </a>

            <Typography variant="h6" color="secondary">
              info@edrsoft.com
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <a
              rel="noopener"
              href="https://www.facebook.com/profile.php?id=100018710410909"
              target="_blank"
            >
              <IconButton aria-label="facebook link" component="span">
                <FacebookIcon color="secondary" fontSize="large" />
              </IconButton>
            </a>
            <a
              rel="noopener"
              href="https://www.linkedin.com/in/emil-hawa-4b2b6717/"
              target="_blank"
            >
              <IconButton aria-label="linkedin link" component="span">
                <LinkedInIcon color="secondary" fontSize="large" />
              </IconButton>
            </a>
            <a
              rel="noopener"
              href="https://www.youtube.com/user/emilhawa2"
              target="_blank"
            >
              <IconButton aria-label="youtube link" component="span">
                <YouTubeIcon color="secondary" fontSize="large" />
              </IconButton>
            </a>
          </Box>
        </Box>
        <Typography align="center" variant="body1" color="secondary">
          © Copyright 2020 All Rights Reserved To EDR Software ltd.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
