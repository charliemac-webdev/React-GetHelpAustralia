import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./font/stylesheet.css";
import "./scss/styles.scss";

// PostHog Analytics
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
posthog.init("phc_YbCKEDx3MZn9e1vtq2Z6EBoSsT0AOCvGrOacQG7QjA7", {
  api_host: "https://app.posthog.com",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
