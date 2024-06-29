/* eslint-disable react/prop-types */
import styles from "./GalleryTitleCard.module.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import GalleryCardModal from "../galleryCardModal/GalleryCardModal";

const GalleryTitleCard = ({
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
      <div
        className={styles.titleCardContainer}
        onClick={() => setOpenModal(true)}
      >
        <p className={styles.titleCardHeading}>{heading}</p>
        <p className={styles.titleCardDate}>{date}</p>
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
    </>
  );
};

export default GalleryTitleCard;
