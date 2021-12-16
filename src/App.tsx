import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
// import Header from "./components/Navigation/Header";
// import Homepage from "./components/Homepage";
// import InstrumentAssessmentMain from "./components/Assessor_Facing/InstrusmentAssessmentMain";
// import DirectorMain from "./components/Director_Facing/DirectorMain";
// import StudentRegistration from "./components/Student_Facing/StudentRegistration";
// import DirectorLogIn from "./components/Director_Facing/DirectorLogIn";
// import StudentInterestForm from "./components/Student_Facing/StudentInterestForm";
import routes from "./components/routes/routes";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

/*
          <Route path="/" element={<Homepage />} />
          <Route
            path="/studentRegistration"
            element={<StudentRegistration />}
          />
          <Route
            path="/instrumentAssessment"
            element={<InstrumentAssessmentMain />}
          />

          <Route path="/directorMain" element={<DirectorMain />} />
          <Route path="/directorLogin" element={<DirectorLogIn />} />
          <Route
            path="/studentInterestForm"
            element={<StudentInterestForm />}
          />
          {/* <Route path="/finalCheckout" element={FinalCheckout} />/*}

*/
