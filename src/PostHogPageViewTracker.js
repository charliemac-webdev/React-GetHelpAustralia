import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PostHogPageViewTracker = () => {
  const location = useLocation();
  const posthog = usePostHog();
  useEffect(() => {
    if (posthog) {
      posthog.capture("$pageview");
    }
  }),
    [location, posthog];
  return null;
};

export default PostHogPageViewTracker;
