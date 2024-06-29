/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./GalleryFeedCard.module.css";
import Modal from "../modal/Modal";
import GalleryCardModal from "../galleryCardModal/GalleryCardModal";
import GalleryCard from "../galleryCard/GalleryCard";

const GalleryFeedCard = ({
  category,
  date,
  heading,
  description,
  logoPath,
  imagePath,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setOpenModal(true)}>
        <div className={styles.topDiv}>
          <img src={logoPath} alt="logo" />
          <div className={styles.innerDiv}>
            <h5 className={styles.category}>{category}</h5>
            <p className={styles.date}>{date}</p>
          </div>
        </div>

        <h3 className={styles.heading}>{heading}</h3>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 400) + "...",
          }}
        ></div>

        <div className={styles.imageDiv}>
          <img className={styles.image} src={imagePath[0]} alt="image" />
          <div className={styles.innerImageDiv}></div>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <GalleryCardModal
          imagePath={imagePath}
          logoPath={logoPath}
          category={category}
          date={date}
          heading={heading}
          description={description}
        />
      </Modal>

      <div className={styles.mobileCardDiv}>
        <GalleryCard
          imagePath={imagePath}
          logoPath={logoPath}
          category={category}
          date={date}
          heading={heading}
          description={description}
        />
      </div>
    </>
  );
};

export default GalleryFeedCard;
