import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
import routes from "./components/routes/routes";

export function App(): JSX.Element {
  return (
    <div>
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
