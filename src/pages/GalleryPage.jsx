import { COLORS } from "../assets/constants";
import GalleryFeed from "../components/galleryFeed/GalleryFeed";
import Navbar from "../components/navbar/Navbar";
import styles from "./GalleryPage.module.css";

const GalleryPage = () => {
  return (
    <div className={styles.container}>
      <Navbar bgColor={COLORS.blue} />

      <GalleryFeed />
    </div>
  );
};

export default GalleryPage;
