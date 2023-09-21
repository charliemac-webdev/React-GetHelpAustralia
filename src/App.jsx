import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";

// Pages
import Menu from "./components/Menu";
import Error from "./pages/Error";
import Home from "./pages/Home";
import GetTheFactsConsequences from "./pages/get-the-facts-consequences";
import GetTheFactsInvestigation from "./pages/get-the-facts-if-being-investigated";
import GetTheFactsIntro from "./pages/get-the-facts-introduction";
import GetTheFactsLaw from "./pages/get-the-facts-law";
import GetTheFactsGrey from "./pages/get-the-facts-no-grey-area";
import Modal from "./pages/modal-page";
import SelfAwarenessIntro from "./pages/self-awareness-introduction";
import SelfHelpIntro from "./pages/self-help-introduction";
import SHForward from "./pages/self-help-moving-forward";
import SHUnderstandingBehaviour from "./pages/self-help-understanding-the-behaviour";
import SelfHelpWellBeing from "./pages/self-help-your-wellbeing-and-self-care";
import InternetAndValues from "./pages/selfAwareness/iv-survey";
import OnlineCognitionSurvey from "./pages/selfAwareness/oc-survey";
import OnlineCognitionSurveyOne from "./pages/selfAwareness/oc-survey-1";
import OnlineCognitionSurveyTwo from "./pages/selfAwareness/oc-survey-2";
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
            <Route
              path="/get-the-facts-introduction"
              element={<GetTheFactsIntro />}
            />
            <Route path="/get-the-facts-law" element={<GetTheFactsLaw />} />
            <Route
              path="/get-the-facts-no-grey-area"
              element={<GetTheFactsGrey />}
            />
            <Route
              path="/get-the-facts-consequences"
              element={<GetTheFactsConsequences />}
            />
            <Route
              path="/get-the-facts-if-being-investigated"
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
            <Route
              path="/online-cognition-scale"
              element={<OnlineCognitionSurvey />}
            />
            <Route
              path="/online-cognition-scale-1"
              element={<OnlineCognitionSurveyOne />}
            />
            <Route
              path="/online-cognition-scale-2"
              element={<OnlineCognitionSurveyTwo />}
            />
            <Route
              path="/internet-and-values"
              element={<InternetAndValues />}
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
            <Route path="/modal-page" element={<Modal />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
