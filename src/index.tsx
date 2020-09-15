import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./App";
import "./index.scss";
import { ReduxState } from "./redux/reducer";
import { configureStore } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { setupFirebase } from "./utils/firebase";

// Setup Firebase
setupFirebase();

// Configure Redux Store
const store: Store<ReduxState> = configureStore();

function Index() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        light: "#3d3d3d",
        main: "#171717",
        dark: "#000000",
        contrastText: "#ffffff",
      },
      secondary: {
        light: "#7378ff",
        main: "#224cf7",
        dark: "#0024c3",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
