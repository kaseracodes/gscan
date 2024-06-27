import { COLORS } from "../assets/constants";
import Banner from "../components/Banner/Banner";
import styles from "./Homepage.module.css";
import CoreValues from "../components/coreValues/CoreValues";
import { CoreValuesData } from "../assets/coreValuesData";
import SliverCan from "../components/sliverCan/SliverCan";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";

const Homepage = () => {
  const heading = `Your <span style="color:${COLORS.orange}">Trusted Partner</span><br /> in Silver Handling<br /> Systems`;
  const description = `• Reach your sustainability goals with <span style="color:${COLORS.orange}">our expert solution</span>, tailored to your company's needs •`;

  console.log(heading);

  return (
    <div className={styles.contianer}>
      <Banner
        imagePath="/images/home_banner.png"
        heading={heading}
        description={description}
      />

      <CoreValues heading="Our Teaming Principles" cardData={CoreValuesData} />

      <SliverCan />

      <div className={styles.div5}>
        <div className={styles.innerDiv5}>
          <h5 className={styles.heading}>
            Durable Castor Wheels for Smooth Mobility
          </h5>
          <p className={styles.desc}>
            We at ChemBizR, partner with global clients to unleash unique
            solutions across a variety of business verticals.
          </p>

          <Button content="Insights" bgColor={COLORS.orange} />
        </div>

        <img src="/images/div5.png" alt="image" />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
