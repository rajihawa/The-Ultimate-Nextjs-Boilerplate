import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import ThemeInit from "../lib/theme";

export type ThemeEnum = "dark" | "light";

export const getTheme = (): ThemeEnum => {
  if (!window) {
    return "dark";
  }
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else if (theme == "dark") {
    return "dark";
  }
  return "light";
};

export const toggleTheme = (prevTheme: ThemeEnum) => {
  if (prevTheme == "dark") {
    localStorage.setItem("theme", "light");
    return "light";
  } else {
    localStorage.setItem("theme", "dark");
    return "dark";
  }
};

export const getBackgroundColor = (theme: ThemeEnum) => {
  if (theme == "dark") {
    return "primary";
  } else {
    return "secondary";
  }
};

interface ThemeControlProps {
  theme: ThemeEnum;
  toggletheme: () => void;
}

interface ComponentProps {
  children: any;
}

export const ThemeControl = createContext<ThemeControlProps>({
  theme: "dark",
  toggletheme: () => {},
});

const ThemeControlContext: React.FC<ComponentProps> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeEnum>("dark");

  useEffect(() => {
    setSelectedTheme(getTheme());
  }, []);

  return (
    <ThemeControl.Provider
      value={{
        theme: selectedTheme,
        toggletheme: () => {
          setSelectedTheme((prev) => toggleTheme(prev));
        },
      }}
    >
      <ThemeProvider theme={ThemeInit(selectedTheme)}>{children}</ThemeProvider>
    </ThemeControl.Provider>
  );
};

export default ThemeControlContext;
