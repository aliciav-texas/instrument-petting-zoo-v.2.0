import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
import Header from "./components/Navigation/Header";
import Homepage from "./components/Homepage";
import InstrumentAssessmentMain from "./components/Assessor_Facing/InstrusmentAssessmentMain";
import DirectorMain from "./components/Director_Facing/DirectorMain";
import StudentRegistration from "./components/Student_Facing/StudentRegistration";

export function App(): JSX.Element {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/studentRegistration"
            element={<StudentRegistration />}
          />
          <Route
            path="/instrumentAssessment"
            element={<InstrumentAssessmentMain />}
          />
          <Route path="/director" element={<DirectorMain />} />
          {/* <Route path="/finalCheckout" element={FinalCheckout} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
