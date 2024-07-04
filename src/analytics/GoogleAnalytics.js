import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID; // Your Google Analytics tracking ID

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]);

  return null;
}

export default Analytics;
