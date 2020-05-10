import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeEnum } from "../context/themeControl";

// Create a theme instance.

const ThemeInit = (type: ThemeEnum) => {
  const theme =
    type == "dark"
      ? createMuiTheme({
          direction: "rtl",
          palette: {
            type: "dark",
            primary: {
              main: "#32407b",
              dark: "#00194d",
              light: "#6069a9",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#46b5d1",
              dark: "#0085a0",
              light: "#7fe7ff",
              contrastText: "#ffffff",
            },
            text: {
              primary: "#ffffff",
              secondary: "#ffffff",
              disabled: "#d3d3d3",
              hint: "#d3d3d3",
            },
          },
        })
      : createMuiTheme({
          direction: "rtl",
          palette: {
            type: "light",
            primary: {
              main: "#32407b",
              dark: "#00194d",
              light: "#6069a9",
              contrastText: "#fff",
            },
            secondary: {
              main: "#ffa726",
              dark: "#c77800",
              light: "#ffd95b",
              contrastText: "#000",
            },
            text: {
              primary: "#000",
              secondary: "#000",
              disabled: "#d3d3d3",
              hint: "#d3d3d3",
            },
            background: {
              default: "#fbfbf8",
            },
          },
        });

  theme.typography.h2 = {
    fontSize: `2.5rem`,
    // [theme.breakpoints.up("xs")]: {
    //   fontSize: `2.5rem`
    // },
    [theme.breakpoints.up("sm")]: {
      fontSize: `3rem`,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: `3.3rem`,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: `3.6rem`,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: `4rem`,
    },
  };

  return theme;
};

export default ThemeInit;
