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

import AddictionModule from "./pages/selfHelp/understandingBehaviour/addiction";
import AdultPornographyModule from "./pages/selfHelp/understandingBehaviour/adult-pornography";
import FantasyModule from "./pages/selfHelp/understandingBehaviour/fantasy";
import ImagesAreChildrenModule from "./pages/selfHelp/understandingBehaviour/images-are-children";
import OnlineWorldModule from "./pages/selfHelp/understandingBehaviour/online-world";
import ProblemOfImmediateModule from "./pages/selfHelp/understandingBehaviour/problem-with-immediate-gratification";
import ProblematicCollectingModule from "./pages/selfHelp/understandingBehaviour/problematic-collecting";
import SexualCommunicationWithChildrenModule from "./pages/selfHelp/understandingBehaviour/sexual-communication-with-children-online";
import TakingResponsibilityModule from "./pages/selfHelp/understandingBehaviour/taking-responsibility";
import TriggersModule from "./pages/selfHelp/understandingBehaviour/triggers";
import UnderstandingWhyModule from "./pages/selfHelp/understandingBehaviour/understanding-why";
import GuiltAndShameModule from "./pages/selfHelp/yourWellBeing/guilt-and-shame";
import OpeningUpToOthersModule from "./pages/selfHelp/yourWellBeing/opening-up-to-others";
import RecognisingAndDealingWithFeelingsModule from "./pages/selfHelp/yourWellBeing/recognising-and-dealing-with-feelings";
import SelfCareModule from "./pages/selfHelp/yourWellBeing/self-care";
import SelfTalkModule from "./pages/selfHelp/yourWellBeing/self-talk";

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
              path="/self-help-self-care"
              element={<SelfCareModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-addiction"
              element={<AddictionModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-online-world"
              element={<OnlineWorldModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-sexual-communication-with-children-online"
              element={
                <SexualCommunicationWithChildrenModule
                  showMenu={handleShowMenu}
                />
              }
            />
            <Route
              path="/self-help-problem-of-immediate-gratification"
              element={<ProblemOfImmediateModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-understanding-why"
              element={<UnderstandingWhyModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-adult-pornography"
              element={<AdultPornographyModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-triggers"
              element={<TriggersModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-self-talk"
              element={<SelfTalkModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-opening-up-to-others"
              element={<OpeningUpToOthersModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-guilt-and-shame"
              element={<GuiltAndShameModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-taking-responsibility"
              element={<TakingResponsibilityModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-recognising-and-dealing-with-feelings"
              element={
                <RecognisingAndDealingWithFeelingsModule
                  showMenu={handleShowMenu}
                />
              }
            />
            <Route
              path="/self-help-fantasy"
              element={<FantasyModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-images-are-children"
              element={<ImagesAreChildrenModule showMenu={handleShowMenu} />}
            />
            <Route
              path="/self-help-problematic-collecting"
              element={
                <ProblematicCollectingModule showMenu={handleShowMenu} />
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
