import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import "./styles/public.css";
import Home from "./component/Home";
import Intro from "./component/Intro";
import Layout from "./component/Layout";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Contact from "./component/Contact";
import { AnimatePresence } from "framer-motion";

function getLocation() {
  const location = useLocation();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  </Router>
);
