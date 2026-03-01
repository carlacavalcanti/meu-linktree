import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OqueEuEntrego from "./Pages/OqueEuEntrego";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o-que-eu-ofereco" element={<OqueEuEntrego />} />
    </Routes>
  );
}
