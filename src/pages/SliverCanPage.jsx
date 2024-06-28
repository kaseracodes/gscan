import { COLORS } from "../assets/constants";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import styles from "./SliverCanPage.module.css";

const SliverCanPage = () => {
  const heading = `Premium <span style="color:${COLORS.orange}">HDPE Sliver</span> Cans`;
  const description = `• Enhancing <span style="color:${COLORS.orange}">Efficiency and Quality</span> in Sliver Handling  •`;

  return (
    <div className={styles.container}>
      <Banner
        imagePath="/images/sliver_can_banner.png"
        heading={heading}
        description={description}
      />

      <div className={styles.div1}>
        <p>
          At GS CAN, we proudly present a new and diversified range of sliver
          handling systems designed to minimize imperfections in sliver
          handling. Our HDPE sliver cans are crafted with the highest standards
          of quality and innovation, ensuring optimal performance for your
          textile operations.
        </p>

        <div className={styles.innerDiv1}>
          <div className={styles.div1Content}>
            <h5>High-Quality Materials</h5>
            <ul>
              <li className={styles.li}>
                Our spinning cans are made from virgin quality HDPE sheets,
                ensuring durability and reliability.
              </li>
              <li className={styles.li}>
                Equipped with HDPE bottom binders, stainless steel, and
                galvanized accessories for added strength and longevity.
              </li>
            </ul>
          </div>

          <img src="/images/sc/div1.png" alt="image" />
        </div>
      </div>

      <div className={styles.div2}>
        <h3>Robust Protection</h3>
        <p>
          High-quality plastic and galvanized iron (GI) top and bottom covers
          offer robust protection and durability.
        </p>
        <p>
          Every sliver can is tailored to meet customer specifications, ensuring
          consistent quality.
        </p>
      </div>

      <div className={styles.div3}>
        <img src="/images/sc/div3.png" alt="image" />

        <div className={styles.div3Content}>
          <h5>Advanced Engineering</h5>
          <ul>
            <li className={styles.li}>
              Precision-tempered box type and pantograph type springs maintain
              consistent tension, ensuring smooth and efficient sliver handling.
            </li>
            <li className={styles.li}>
              Dust and fluff free ball bearing castor wheels provide seamless
              mobility and reduce maintenance issues.
            </li>
            <li className={styles.li}>
              We offer a complete range of sliver cans, from 225mm to 1220mm in
              diameter, catering to the diverse needs of the textile and jute
              industry.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.div4}>
        <h3>Color Your Workflow!</h3>
        <span>
          Choose from Over{" "}
          <span style={{ color: COLORS.orange }}>25 Vibrant</span> Options!
        </span>
        <p className={styles.div4P}>
          At GS CAN, we understand the importance of{" "}
          <span style={{ color: COLORS.orange }}>aesthetics</span> and
          functionality. That&prime;s why we offer over 25 vibrant color options
          for our HDPE sliver cans. Whether{" "}
          <span style={{ color: COLORS.orange }}>
            matching your brand&prime;s identity
          </span>
          or brightening up your workspace, our extensive color range ensures
          you find the perfect hue. Customize your sliver cans with our diverse
          palette and enjoy the blend of durability, performance, and style that
          GS CAN is known for.
        </p>

        <button>
          Explore More <img src="/images/external.png" alt="external link" />
        </button>
      </div>

      <ContactUs />

      <Footer />
    </div>
  );
};

export default SliverCanPage;
