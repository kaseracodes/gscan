import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SliverCanPage from "./pages/SliverCanPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import AboutUsPage from "./pages/AboutUsPage";
import CastorWheelsPage from "./pages/CastorWheelsPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sliver-can" element={<SliverCanPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/castor" element={<CastorWheelsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
