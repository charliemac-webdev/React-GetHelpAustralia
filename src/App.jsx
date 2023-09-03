import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";

// Pages
import Menu from "./components/Menu";
import Error from "./pages/Error";
import GetTheFactsGrey from "./pages/GetTheFactsGrey";
import GetTheFactsIntro from "./pages/GetTheFactsIntro";
import GetTheFactsInvestigation from "./pages/GetTheFactsInvestigation";
import GetTheFactsLaw from "./pages/GetTheFactsLaw";
import Home from "./pages/Home";
import GetTheFactsConsequences from "./pages/get-the-facts-consequences";
import SelfAwarenessIntro from "./pages/self-awareness-introduction";
import SelfHelpIntro from "./pages/self-help-introduction";
import SHForward from "./pages/self-help-moving-forward";
import SHUnderstandingBehaviour from "./pages/self-help-understanding-the-behaviour";
import SelfHelpWellBeing from "./pages/self-help-your-wellbeing-and-self-care";
import UsefulResources from "./pages/useful-resources";
import WhyChangeIntro from "./pages/why-change-introduction";
import WhyChangeStrengths from "./pages/why-change-strengths";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Help />
        <div className="main-section-grid">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GetTheFactsIntro" element={<GetTheFactsIntro />} />
            <Route path="/GetTheFactsLaw" element={<GetTheFactsLaw />} />
            <Route path="/GetTheFactsGrey" element={<GetTheFactsGrey />} />
            <Route
              path="/get-the-facts-consequences"
              element={<GetTheFactsConsequences />}
            />
            <Route
              path="/GetTheFactsInvestigation"
              element={<GetTheFactsInvestigation />}
            />
            <Route
              path="/why-change-introduction"
              element={<WhyChangeIntro />}
            />
            <Route
              path="/why-change-strengths"
              element={<WhyChangeStrengths />}
            />
            <Route
              path="/self-awareness-introduction"
              element={<SelfAwarenessIntro />}
            />
            <Route path="/self-help-introduction" element={<SelfHelpIntro />} />
            <Route
              path="/self-help-your-wellbeing-and-self-care"
              element={<SelfHelpWellBeing />}
            />
            <Route
              path="/self-help-understanding-the-behaviour"
              element={<SHUnderstandingBehaviour />}
            />
            <Route path="/self-help-moving-forward" element={<SHForward />} />
            <Route path="/useful-resources" element={<UsefulResources />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
