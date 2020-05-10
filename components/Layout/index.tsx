import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { Box, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    body: {},
    scrollTop: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: theme.zIndex.appBar,
    },
  })
);

interface LayoutProps {
  title?: string;
  children?: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Head>
        <title>Website {title ? ` | ${title}` : ""}</title>
      </Head>
      <Navbar />
      <Box className={classes.body}>{children}</Box>
    </Box>
  );
};

export default Layout;
