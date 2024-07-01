import { COLORS } from "../assets/constants";
import GalleryFeed from "../components/galleryFeed/GalleryFeed";
import Navbar from "../components/navbar/Navbar";
import useDisableZoom from "../useDisableZoom";
import styles from "./GalleryPage.module.css";

const GalleryPage = () => {
  useDisableZoom();

  return (
    <div className={styles.container}>
      <Navbar bgColor={COLORS.white} pageType="" />

      <GalleryFeed />
    </div>
  );
};

export default GalleryPage;
