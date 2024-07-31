import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/store";

// Analytics

// Components
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import ScrollToTop from "./components/ScrollToTop";

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
