import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StoreProvider} from './utils/store'

import { Auth0Provider } from "@auth0/auth0-react";
// import { useHistory } from "react-router";
import { getConfig } from "../config";


// const onRedirectCallback = (appState) => {
//   useHistory.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  // onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Auth0Provider>,
  document.getElementById("root")
);