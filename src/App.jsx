import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Menu from "./components/Menu";

// Pages

import Error from "./pages/Error";
import Home from "./pages/Home";
import MovingForward from "./pages/MovingForward";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Resources from "./pages/Resources";
import UnderstandingYourOnlineBehaviour from "./pages/UnderstandingYourOnlineBehaviour";
import UnderstandingYourThoughtsAndBehaviour from "./pages/UnderstandingYourThoughtsAndBehaviour";
import WellbeingAndSelfCare from "./pages/WellbeingAndSelfCare";
import Modal from "./pages/modal-page";

// Modules

import AddictionModule from "./pages/UnderstandingOnlineBehaviour/addiction";
import AdultPornographyModule from "./pages/UnderstandingOnlineBehaviour/adult-pornography";
import FantasyModule from "./pages/UnderstandingOnlineBehaviour/fantasy";
import ImagesAreChildrenModule from "./pages/UnderstandingOnlineBehaviour/images-are-children";
import OnlineWorldModule from "./pages/UnderstandingOnlineBehaviour/online-world";
import ProblemOfImmediateModule from "./pages/UnderstandingOnlineBehaviour/problem-with-immediate-gratification";
import ProblematicCollectingModule from "./pages/UnderstandingOnlineBehaviour/problematic-collecting";
import SexualCommunicationWithChildrenModule from "./pages/UnderstandingOnlineBehaviour/sexual-communication-with-children-online";
import TakingResponsibilityModule from "./pages/UnderstandingOnlineBehaviour/taking-responsibility";
import TriggersModule from "./pages/UnderstandingOnlineBehaviour/triggers";
import UnderstandingWhyModule from "./pages/UnderstandingOnlineBehaviour/understanding-why";
import GuiltAndShameModule from "./pages/Wellbeing/guilt-and-shame";
import MotivationForChangeModule from "./pages/Wellbeing/motivation-for-change";
import RecognisingAndDealingWithFeelingsModule from "./pages/Wellbeing/recognising-and-dealing-with-feelings";
import SelfCareModule from "./pages/Wellbeing/self-care";
import SelfEsteemAndAssertivenessModule from "./pages/Wellbeing/self-esteem-and-assertiveness";
import SelfTalkModule from "./pages/Wellbeing/self-talk";

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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route
              path="/wellbeing-and-self-care"
              element={<WellbeingAndSelfCare />}
            />
            <Route
              path="/understanding-your-online-behaviour"
              element={<UnderstandingYourOnlineBehaviour />}
            />
            <Route
              path="/understanding-your-thoughts-and-behaviour"
              element={<UnderstandingYourThoughtsAndBehaviour />}
            />
            <Route path="/moving-forward" element={<MovingForward />} />
            <Route path="/resources" element={<Resources />} />

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
              element={
                <ProblematicCollectingModule showMenu={handleShowMenu} />
              }
            />
            <Route
              path="/motivation-for-change"
              element={<MotivationForChangeModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-esteem-and-assertiveness"
              element={
                <SelfEsteemAndAssertivenessModule showMenu={handleShowMenu} />
              }
            />
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
