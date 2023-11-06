import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
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
import InternetValuesSurvey from "./pages/selfAwareness/iv-survey";
import InternetValuesOne from "./pages/selfAwareness/iv-survey-1";
import InternetValuesTen from "./pages/selfAwareness/iv-survey-10";
import InternetValuesEleven from "./pages/selfAwareness/iv-survey-11";
import InternetValuesTwelve from "./pages/selfAwareness/iv-survey-12";
import InternetValuesThirteen from "./pages/selfAwareness/iv-survey-13";
import InternetValuesTwo from "./pages/selfAwareness/iv-survey-2";
import InternetValuesThree from "./pages/selfAwareness/iv-survey-3";
import InternetValuesFour from "./pages/selfAwareness/iv-survey-4";
import InternetValuesFive from "./pages/selfAwareness/iv-survey-5";
import InternetValuesSix from "./pages/selfAwareness/iv-survey-6";
import InternetValuesSeven from "./pages/selfAwareness/iv-survey-7";
import InternetValuesEight from "./pages/selfAwareness/iv-survey-8";
import InternetValuesNine from "./pages/selfAwareness/iv-survey-9";
import InternetValuesResult from "./pages/selfAwareness/iv-survey-result";
import OnlineCognitionSurvey from "./pages/selfAwareness/oc-survey";
import OnlineCognitionSurveyOne from "./pages/selfAwareness/oc-survey-1";
import OnlineCognitionSurveyTwo from "./pages/selfAwareness/oc-survey-2";
import OnlineCognitionSurveyThree from "./pages/selfAwareness/oc-survey-3";
import OnlineCognitionSurveyFour from "./pages/selfAwareness/oc-survey-4";
import OnlineCognitionSurveyFive from "./pages/selfAwareness/oc-survey-5";
import OnlineCognitionSurveySix from "./pages/selfAwareness/oc-survey-6";
import OnlineCognitionSurveySeven from "./pages/selfAwareness/oc-survey-7";
import OnlineCognitionSurveyResult from "./pages/selfAwareness/oc-survey-result";
import SelfCareModule from "./pages/selfHelp/self-care";
import UsefulResources from "./pages/useful-resources";
import WhyChangeIntro from "./pages/why-change-introduction";
import WhyChangeStrengths from "./pages/why-change-strengths";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Help />
        <span
          role="button"
          className="menu-toggle-icons"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <BiLeftArrow className="menu-icon" />
          ) : (
            <BiRightArrow className="menu-icon" />
          )}
        </span>
        <div
          className={`${
            showMenu ? "main-section-grid" : "main-section-grid-nomenu"
          }`}
        >
          {showMenu && <Menu />}
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
              path="/online-cognition-scale-3"
              element={<OnlineCognitionSurveyThree />}
            />
            <Route
              path="/online-cognition-scale-4"
              element={<OnlineCognitionSurveyFour />}
            />
            <Route
              path="/online-cognition-scale-5"
              element={<OnlineCognitionSurveyFive />}
            />
            <Route
              path="/online-cognition-scale-6"
              element={<OnlineCognitionSurveySix />}
            />
            <Route
              path="/online-cognition-scale-7"
              element={<OnlineCognitionSurveySeven />}
            />
            <Route
              path="/online-cognition-scale-result"
              element={<OnlineCognitionSurveyResult />}
            />
            <Route
              path="/internet-and-values"
              element={<InternetValuesSurvey />}
            />
            <Route
              path="/internet-and-values-1"
              element={<InternetValuesOne />}
            />
            <Route
              path="/internet-and-values-2"
              element={<InternetValuesTwo />}
            />
            <Route
              path="/internet-and-values-3"
              element={<InternetValuesThree />}
            />
            <Route
              path="/internet-and-values-4"
              element={<InternetValuesFour />}
            />
            <Route
              path="/internet-and-values-5"
              element={<InternetValuesFive />}
            />
            <Route
              path="/internet-and-values-6"
              element={<InternetValuesSix />}
            />
            <Route
              path="/internet-and-values-7"
              element={<InternetValuesSeven />}
            />
            <Route
              path="/internet-and-values-8"
              element={<InternetValuesEight />}
            />
            <Route
              path="/internet-and-values-9"
              element={<InternetValuesNine />}
            />
            <Route
              path="/internet-and-values-10"
              element={<InternetValuesTen />}
            />
            <Route
              path="/internet-and-values-11"
              element={<InternetValuesEleven />}
            />
            <Route
              path="/internet-and-values-12"
              element={<InternetValuesTwelve />}
            />
            <Route
              path="/internet-and-values-13"
              element={<InternetValuesThirteen />}
            />
            <Route
              path="/internet-and-values-results"
              element={<InternetValuesResult />}
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
            <Route
              path="/self-help-self-care"
              element={<SelfCareModule showMenu={handleShowMenu} />}
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
