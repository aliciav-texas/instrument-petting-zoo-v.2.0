import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
import routes from "./components/routes/routes";

export function App(): JSX.Element {
  return (
    <div>
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
