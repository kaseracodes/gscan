/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import styles from "./Banner.module.css";
import Button from "../button/Button";

const Banner = ({ imagePath, heading, description }) => {

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Baf-KGYF6WpOwwWuDwPpRG9pQ7aBfcyD'; // Replace with the actual path to your PDF
    link.download = 'Brochure.pdf'; // Set the desired filename for download
    link.click();
  };

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
      <Button
        content="Brochure"
        bgColor={COLORS.orange}
        onClick={downloadBrochure}
      />
    </div>
  );
};

export default Banner;
