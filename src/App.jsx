import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SliverCanPage from "./pages/SliverCanPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sliver-can" element={<SliverCanPage />} />
      </Routes>
    </>
  );
}

export default App;
