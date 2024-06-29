import { CastorWheelsData } from "../assets/castorWheelsData";
import CarouselSection from "../components/carouselSection/CarouselSection";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./CastorWheelsPage.module.css";

const CastorWheelsPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.div1}>
        <div className={styles.div1Content}>
          <h3 className={styles.heading}>Smooth Moves</h3>
          <p className={styles.div1p}>
            • Navigate Your Industry with Our{" "}
            <span className={styles.special}>Castor Wheels</span> •
          </p>
          <p className={`${styles.para} ${styles.div1Para}`}>
            Upgrade your operations with our high-performance castor wheels.
            Designed for smooth and efficient movement, our wheels are dust and
            fluff-free, ensuring hassle-free operation in your workspace. Trust
            in our <span className={styles.special}>quality craftsmanship</span>{" "}
            to keep your operations rolling smoothly.
          </p>
        </div>

        <img
          src="/images/castor/image1.png"
          alt="image"
          className={styles.div1Image}
        />
      </div>

      <div className={styles.div2}>
        <img
          src="/images/castor/image2.png"
          alt="image"
          className={styles.div2Image}
        />

        <div className={styles.div2Content}>
          <h5 className={styles.subHeading}>Advanced Engineering</h5>
          <ul>
            <li className={styles.div2Para}>
              The sheet metal part is a robust 2.5 mm thick, ensuring durability
              and longevity.
            </li>
            <li className={styles.div2Para}>
              Special carriage bolts and only ZZ bearings are used to enhance
              the wheels&prime; lifespan and performance.
            </li>
            <li className={styles.div2Para}>
              We exclusively use Nylock nuts, significantly reducing the chances
              of unwinding and falling off.
            </li>
            <li className={styles.div2Para}>
              Our wheels are manufactured from carefully selected Nylon 6 Grade
              Polymer, guaranteeing exceptional quality and performance.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.div3}>
        <img
          src="/images/castor/image3.png"
          alt="image"
          className={styles.div3Image}
        />
        <p className={styles.para}>
          At GS Can, we specialize in manufacturing castor wheels of{" "}
          <span className={styles.special}>
            various sizes and configurations
          </span>
          . Our offerings include wheels with{" "}
          <span className={styles.special}>
            trapeze, rectangular, and square bases
          </span>
          , each designed for optimal performance in different applications.
          Whether you need castor wheels with ball bearings, bush bearings,
          needle bearings, or other configurations, we have you covered.
          <br />
          <br />
          Our castor wheels feature a fluff-proof design, ensuring that{" "}
          <span className={styles.special}>
            no extra waste accumulates near the wheels
          </span>
          . These wheels are integral parts of our state-of-the-art cans,
          contributing to their efficiency and reliability.
        </p>
      </div>

      <CarouselSection
        heading="Versatile Solutions for Every Need"
        description="Discover our wide range of castors, designed for various applications and industries. Each type ensures smooth, efficient, and reliable mobility tailored to your specific requirements."
        cardData={CastorWheelsData}
      />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default CastorWheelsPage;
