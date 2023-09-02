import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";

// Pages
import Menu from "./components/Menu";
import Error from "./pages/Error";
import GetTheFactsConsequences from "./pages/GetTheFactsConsequences";
import GetTheFactsGrey from "./pages/GetTheFactsGrey";
import GetTheFactsIntro from "./pages/GetTheFactsIntro";
import GetTheFactsInvestigation from "./pages/GetTheFactsInvestigation";
import GetTheFactsLaw from "./pages/GetTheFactsLaw";
import Home from "./pages/Home";
import SelfAwarenessIntro from "./pages/SelfAwarenessIntro";
import SelfHelpIntro from "./pages/SelfHelpIntro";
import UsefulResources from "./pages/UsefulResources";
import WhyChangeIntro from "./pages/WhyChangeIntro";
import WhyChangeStrengths from "./pages/WhyChangeStrengths";

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
              path="/GetTheFactsConsequences"
              element={<GetTheFactsConsequences />}
            />
            <Route
              path="/GetTheFactsInvestigation"
              element={<GetTheFactsInvestigation />}
            />
            <Route path="/WhyChangeIntro" element={<WhyChangeIntro />} />
            <Route
              path="/WhyChangeStrengths"
              element={<WhyChangeStrengths />}
            />
            <Route
              path="/SelfAwarenessIntro"
              element={<SelfAwarenessIntro />}
            />
            <Route path="/SelfHelpIntro" element={<SelfHelpIntro />} />
            <Route path="/UsefulResources" element={<UsefulResources />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
