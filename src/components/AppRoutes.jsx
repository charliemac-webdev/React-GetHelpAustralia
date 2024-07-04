import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import ModuleNav from "./ModuleNav";

// Pages

import Error from "../pages/Error";
import Home from "../pages/Home";
import Modal from "../pages/modal-page";
import MovingForward from "../pages/MovingForward";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Resources from "../pages/Resources";
import UnderstandingYourOnlineBehaviour from "../pages/UnderstandingYourOnlineBehaviour";
import WellbeingAndSelfCare from "../pages/WellbeingAndSelfCare";

// Modules

import BuildingAGoodLifeModule from "../pages/MovingForward/BuildingAGoodLife";
import ConsequencesMediaDisclosureModule from "../pages/MovingForward/ConsequencesMediaDisclosure";
import ProblemSolvingModule from "../pages/MovingForward/ProblemSolving";
import RelapsePreventionModule from "../pages/MovingForward/RelapsePrevention";
import AddictionModule from "../pages/UnderstandingOnlineBehaviour/addiction";
import AdultPornographyModule from "../pages/UnderstandingOnlineBehaviour/adult-pornography";
import FantasyModule from "../pages/UnderstandingOnlineBehaviour/fantasy";
import ImagesAreChildrenModule from "../pages/UnderstandingOnlineBehaviour/images-are-children";
import JustificationsModule from "../pages/UnderstandingOnlineBehaviour/justifications-page";
import OnlineWorldModule from "../pages/UnderstandingOnlineBehaviour/online-world";
import ProblemOfImmediateModule from "../pages/UnderstandingOnlineBehaviour/problem-with-immediate-gratification";
import ProblematicCollectingModule from "../pages/UnderstandingOnlineBehaviour/problematic-collecting";
// import SelfAwarenessOnlineCognition from "./pages/UnderstandingOnlineBehaviour/self-awareness-online-cognition";
import SexualCommunicationWithChildrenModule from "../pages/UnderstandingOnlineBehaviour/sexual-communication-with-children-online";
import TakingResponsibilityModule from "../pages/UnderstandingOnlineBehaviour/taking-responsibility";
import TriggersModule from "../pages/UnderstandingOnlineBehaviour/triggers";
import UnderstandingWhyModule from "../pages/UnderstandingOnlineBehaviour/understanding-why";
import GuiltAndShameModule from "../pages/Wellbeing/guilt-and-shame";
import ManagingThoughtsModule from "../pages/Wellbeing/managing-thoughts";
import MotivationForChangeModule from "../pages/Wellbeing/motivation-for-change";
import RecognisingAndDealingWithFeelingsModule from "../pages/Wellbeing/recognising-and-dealing-with-feelings";
// import SelfAwarenessDistress from "./pages/Wellbeing/self-awareness-distress";
import SelfCareModule from "../pages/Wellbeing/self-care";
import SelfEsteemAndAssertivenessModule from "../pages/Wellbeing/self-esteem-and-assertiveness";
import SelfTalkModule from "../pages/Wellbeing/self-talk";
import UnderstandingThoughtsModule from "../pages/Wellbeing/understanding-thoughts";

//Quiz
import DistressQuizSurvey from "../pages/Wellbeing/DistressQuizK10/distress-quiz-survey-page";
import DistressQuizOne from "../pages/Wellbeing/DistressQuizK10/distress-quiz-1";
import DistressQuizTwo from "../pages/Wellbeing/DistressQuizK10/disress-quiz-2";
import DistressQuizResults from "../pages/Wellbeing/DistressQuizK10/distress-quiz-results-page";

import GpiusSurveyPage from "../pages/UnderstandingOnlineBehaviour/GPIUS/gpius-survey-page";
import GpiusQuizOne from "../pages/UnderstandingOnlineBehaviour/GPIUS/gpius-questions-one-page";
import GpiusQuizTwo from "../pages/UnderstandingOnlineBehaviour/GPIUS/gpius-questions-two-page";
import GpiusQuizThree from "../pages/UnderstandingOnlineBehaviour/GPIUS/gpius-questions-three-page";
import GpiusQuizResults from "../pages/UnderstandingOnlineBehaviour/GPIUS/gpius-results-page";
// Import other components as needed

function AppRoutes() {
  const [showMenu, setShowMenu] = useState(true);
  const [showModuleNav, setShowModuleNav] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(false);
    setShowModuleNav(true);
  };

  const handleHideMenu = () => {
    setShowMenu(true);
    setShowModuleNav(false);
  };

  return (
    <>
      <div
        onClick={handleHideMenu}
        className={`${showModuleNav ? "module-nav" : "module-nav-nodisplay"}`}
      >
        {showModuleNav && <ModuleNav />}
      </div>
      <div
        className={`${
          showMenu ? "main-section-grid" : "main-section-grid-nomenu"
        }`}
      >
        {showMenu && <Menu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="/wellbeing-and-self-care"
            element={<WellbeingAndSelfCare />}
          />
          <Route
            path="/understanding-your-online-behaviour"
            element={<UnderstandingYourOnlineBehaviour />}
          />
          <Route path="/moving-forward" element={<MovingForward />} />
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/self-awareness-psychological-distress-survey"
            element={<DistressQuizSurvey showMenu={handleShowMenu} />}
          />
          <Route
            path="/distress-quiz-1"
            element={<DistressQuizOne showMenu={handleShowMenu} />}
          />
          <Route
            path="/distress-quiz-2"
            element={<DistressQuizTwo showMenu={handleShowMenu} />}
          />
          <Route
            path="/distress-quiz-results"
            element={<DistressQuizResults showMenu={handleShowMenu} />}
          />
          <Route
            path="/self-awareness-internet-use-survey"
            element={<GpiusSurveyPage showMenu={handleShowMenu} />}
          />
          <Route
            path="/gpius-quiz-1"
            element={<GpiusQuizOne showMenu={handleShowMenu} />}
          />
          <Route
            path="/gpius-quiz-2"
            element={<GpiusQuizTwo showMenu={handleShowMenu} />}
          />
          <Route
            path="/gpius-quiz-3"
            element={<GpiusQuizThree showMenu={handleShowMenu} />}
          />
          <Route
            path="/gpius-quiz-results"
            element={<GpiusQuizResults showMenu={handleShowMenu} />}
          />
          <Route
            path="/self-care"
            element={<SelfCareModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/addiction"
            element={<AddictionModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/online-world"
            element={<OnlineWorldModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/sexual-communication-with-children-online"
            element={
              <SexualCommunicationWithChildrenModule
                showMenu={handleShowMenu}
              />
            }
          />
          <Route
            path="/problem-of-immediate-gratification"
            element={<ProblemOfImmediateModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/understanding-why"
            element={<UnderstandingWhyModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/adult-pornography"
            element={<AdultPornographyModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/triggers"
            element={<TriggersModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/self-talk"
            element={<SelfTalkModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/guilt-and-shame"
            element={<GuiltAndShameModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/taking-control-of-your-online-behaviour"
            element={<TakingResponsibilityModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/recognising-and-dealing-with-feelings"
            element={
              <RecognisingAndDealingWithFeelingsModule
                showMenu={handleShowMenu}
              />
            }
          />
          <Route
            path="/fantasy"
            element={<FantasyModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/images-are-children"
            element={<ImagesAreChildrenModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/problematic-collecting"
            element={<ProblematicCollectingModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/motivation-for-change"
            element={<MotivationForChangeModule showMenu={handleShowMenu} />}
          />
          <Route
            path="relapse-prevention"
            element={<RelapsePreventionModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/building-a-good-life"
            element={<BuildingAGoodLifeModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/problem-solving"
            element={<ProblemSolvingModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/managing-thoughts-feelings-and-behaviours"
            element={<ManagingThoughtsModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/understanding-thoughts-feelings-and-behaviours"
            element={<UnderstandingThoughtsModule showMenu={handleShowMenu} />}
          />
          <Route
            path="/consequences-media-impact-and-disclosure"
            element={
              <ConsequencesMediaDisclosureModule showMenu={handleShowMenu} />
            }
          />
          <Route
            path="/self-esteem-and-assertiveness"
            element={
              <SelfEsteemAndAssertivenessModule showMenu={handleShowMenu} />
            }
          />
          {/* <Route
                path="/self-awareness-problematic-internet-use"
                element={
                  <SelfAwarenessOnlineCognition showMenu={handleShowMenu} />
                }
              /> */}
          {/* <Route
                path="/self-awareness-psychological-distress"
                element={<SelfAwarenessDistress showMenu={handleShowMenu} />}
              /> */}
          <Route
            path="/justifications"
            element={<JustificationsModule showMenu={handleShowMenu} />}
          />
          <Route path="/modal-page" element={<Modal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
