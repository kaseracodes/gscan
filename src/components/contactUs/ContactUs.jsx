import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import PlaceCard from "../placeCard/PlaceCard";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <PlaceCard
        imagePath="/images/building.png"
        office="29/3 B.T. Road, Kolkata – 700056"
        factory="Chanditala Industrial Park, Roypara Chanditala, Hooghly – 712702"
        email="gscanworks@gmail.com"
        phones={["+91 7003788574", "+91 9831054041"]}
      />

      <div className={styles.div}>
        <h3 className={styles.heading}>Reach Out To Us!</h3>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Name" className={styles.name} />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.email}
          />
        </div>

        <div className={styles.inputDiv2}>
          <input type="text" placeholder="Subject" />
          <textarea rows="5" cols="30" placeholder="Your Message" />

          <Button content="Submit" bgColor={COLORS.orange} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
