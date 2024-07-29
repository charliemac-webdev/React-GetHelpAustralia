import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/store";

// Analytics
import PostHogPageViewTracker from "./analytics/PostHogPageViewTracker";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter>
          {/* <PostHogPageViewTracker />
          <GoogleAnalytics /> */}
          <ScrollToTop />
          <Header />
          <Help />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
