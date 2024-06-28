import "./App.css";
import HomePage from "./components/HomePage/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SectionOne from "./SectionOne";
import SectionTwo from "../src/components/About me/Section2";
// import SectionThree from "./SectionThree";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/section/1" element={<SectionOne />} /> */}
        <Route path="/section/2" element={<SectionTwo />} />
        {/* <Route path="/section/3" element={<SectionThree />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
