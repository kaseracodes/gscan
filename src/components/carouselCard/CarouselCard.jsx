/* eslint-disable react/prop-types */
import styles from "./CarouselCard.module.css";

const CarouselCard = ({ imagePath, heading, description, bgColor }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageDiv} style={{ backgroundColor: bgColor }}>
          <img src={imagePath} alt="image" />
        </div>

        <div className={styles.contentDiv}>
          <h3
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h3>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
