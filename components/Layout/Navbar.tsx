import React, { useContext, useState, useEffect } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Slide,
  useScrollTrigger,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  IconButton,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Image from "../images";
import { ThemeControl } from "../../context/themeControl";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Brightness6RoundedIcon from "@material-ui/icons/Brightness6Rounded";
import { AuthControl } from "../../context/authControl";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0, 1),
      flexWrap: "wrap",
    },
    logo: {
      maxHeight: "80px",
      cursor: "pointer",
    },
    logoContainer: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      [theme.breakpoints.up("sm")]: {
        flexGrow: 1,
      },
    },
    buttons: {
      fontSize: "1.5rem",
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        flex: 0.3333,
      },
    },
    appBar: {},
    menu: {
      zIndex: theme.zIndex.drawer,
    },
  })
);

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useContext(ThemeControl);
  const authControl = useContext(AuthControl);
  const classes = useStyles();

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar className={classes.appBar} position="static">
      <Container maxWidth="lg">
        <Toolbar className={classes.root}>
          <Link href="/">
            <Box className={classes.logoContainer}>
              <Image
                className={classes.logo}
                alt="EDR Logo"
                fallType="png"
                path="/design/logo/logo"
              />
            </Box>
          </Link>

          <Button
            variant="contained"
            color="secondary"
            className={classes.buttons}
          >
            Button
          </Button>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            className={classes.menu}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      onKeyDown={handleListKeyDown}
                    >
                      <ListItem button onClick={theme.toggletheme}>
                        <ListItemIcon>
                          <Brightness6RoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="toggle Theme" />
                      </ListItem>
                      {authControl.user && (
                        <ListItem
                          button
                          onClick={() => {
                            authControl.signout();
                          }}
                        >
                          <ListItemIcon>
                            <ExitToAppRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Signout" />
                        </ListItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default Navbar;
