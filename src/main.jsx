import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./font/stylesheet.scss";
import "./scss/styles.scss";

// PostHog Analytics
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_API_URL,
  person_profiles: "identified_only",
  capture_pageview: false,
  autocapture: {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
