/* eslint-disable react/prop-types */
import styles from "./Banner.module.css";

const Banner = ({ imagePath, heading, description }) => {
  return (
    <div
      style={{ backgroundImage: `url("${imagePath}")` }}
      className={styles.container}
    >
      <h1
        dangerouslySetInnerHTML={{ __html: heading }}
        className={styles.heading}
      />
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className={styles.desc}
      />
    </div>
  );
};

export default Banner;
