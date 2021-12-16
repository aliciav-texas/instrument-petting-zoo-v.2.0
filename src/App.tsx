import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
// import Header from "./components/Navigation/Header";
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
