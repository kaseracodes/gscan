import GalleryFeed from "../components/galleryFeed/GalleryFeed";
import styles from "./GalleryPage.module.css";

const GalleryPage = () => {
  return (
    <div className={styles.container}>
      <GalleryFeed />
    </div>
  );
};

export default GalleryPage;
