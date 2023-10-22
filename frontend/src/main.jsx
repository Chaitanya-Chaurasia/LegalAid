import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Encode Sans Condensed",
    body: "Open Sans",
  },
  weights: {
    normal: 400,
    bold: 700,
  },
});

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <GoogleOAuthProvider clientId="195044032993-1eohkc391ob5ltbtflj69rfse2960sn5.apps.googleusercontent.com">
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
