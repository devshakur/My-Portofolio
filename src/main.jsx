import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./component/Home";
import Layout from "./component/Layout";
import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Navigate to="/#about" replace />} />
        <Route path="/resume" element={<Navigate to="/#experience" replace />} />
        <Route path="/portfolio" element={<Navigate to="/#projects" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout>
      <AnimatedRoutes />
    </Layout>
  </Router>
);
