/* eslint-disable react/prop-types */
import styles from "./PlaceCard.module.css";

const PlaceCard = ({ imagePath, office, factory, email, phones }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />

      <h5 className={styles.country}>Registered Office</h5>
      <p className={styles.address}>{office}</p>
      <h5 className={styles.country}>Registered Factory</h5>
      <p className={styles.address}>{factory}</p>

      <div>
        <div className={styles.contacts}>
          <img src="/images/mail.png" alt="images" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.contacts}>
          <img src="/images/phone.png" alt="images" />
          {phones.map((item, index) => (
            <a key={index} className={styles.phone} href={`tel:${item}`}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
