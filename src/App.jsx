import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SliverCanPage from "./pages/SliverCanPage";
import AccessoriesPage from "./pages/AccessoriesPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sliver-can" element={<SliverCanPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
