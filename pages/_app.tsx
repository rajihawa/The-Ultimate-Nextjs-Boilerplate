import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeControlContext from "../context/themeControl";
import AuthContext from "../context/authControl";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <AuthContext>
        <ThemeControlContext>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeControlContext>
      </AuthContext>
    </React.Fragment>
  );
};

export default App;
