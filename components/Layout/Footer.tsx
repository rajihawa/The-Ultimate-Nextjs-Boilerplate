import React from "react";
import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant="body1">
          © Copyright 2020 All Rights Reserved To Website Owner.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
