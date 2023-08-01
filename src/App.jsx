import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Menu from "./components/Menu";
import Error from "./pages/Error";
import GetTheFactsConsequences from "./pages/GetTheFactsConsequences";
import GetTheFactsGrey from "./pages/GetTheFactsGrey";
import GetTheFactsIntro from "./pages/GetTheFactsIntro";
import GetTheFactsInvestigation from "./pages/GetTheFactsInvestigation";
import GetTheFactsLaw from "./pages/GetTheFactsLaw";
import Home from "./pages/Home";
import WhyChangeIntro from "./pages/WhyChangeIntro";
import WhyChangeStrengths from "./pages/WhyChangeStrengths";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Help />
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
          <Route path="/WhyChangeStrengths" element={<WhyChangeStrengths />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
