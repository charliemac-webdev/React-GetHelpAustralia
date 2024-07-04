import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "G-MHC4E8G6JE"; // Your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

export default Analytics;
