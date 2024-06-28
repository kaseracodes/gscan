import { COLORS } from "../assets/constants";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import styles from "./AccessoriesPage.module.css";

const AccessoriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h3 className={styles.heading}>Accessories</h3>
        <p className={styles.div1p}>
          • Elevate Your Operations with{" "}
          <span className={styles.special}>Precision</span> Components •
        </p>
        <p className={`${styles.para} ${styles.div1Para}`}>
          Discover a comprehensive range of precision components{" "}
          <span className={styles.special}>designed to optimize</span> your
          operations. Crafted with meticulous attention to detail and
          manufactured to the{" "}
          <span className={styles.special}>highest standards</span>, our
          accessories are engineered to enhance performance and durability.
        </p>
      </div>

      <div className={styles.div2}>
        <div className={styles.div2Inner1}>
          <div className={styles.contentDiv}>
            <h5 className={styles.subHeading}>
              Bottom Rings and Bottom Plates
            </h5>
            <p className={styles.para2}>
              Our bottom rings and bottom plate are meticulously crafted from
              deep drawing quality galvanized iron sheets, ensuring exceptional
              durability and stability in your spinning operations. These
              components are equidistantly embossed, enhancing their overall
              strength and preventing deformation even under heavy loads.
              Engineered to withstand the demanding conditions of industrial
              use, our bottom rings and bottom plate provide reliable support
              for your spinning cans.
            </p>
          </div>

          <img
            src="/images/acs/image1.png"
            alt="image"
            className={styles.div2Image}
          />
        </div>

        <div className={styles.div2Inner2}>
          <div className={styles.contentDiv}>
            <h5 className={styles.subHeading}>Top Rings and Bands</h5>
            <p className={styles.para2}>
              Crafted with precision from high-grade stainless steel, our top
              rings and bands feature argon-welded smooth joints, ensuring
              minimal yarn breakage and maximum durability. Swedged along with
              the HDPE body sheet, they maintain a perfect round shape,
              providing consistent tension and facilitating smooth sliver
              movement throughout the spinning process. Designed to withstand
              the rigors of industrial use, these top rings and bands are
              essential components for optimizing the performance of your
              spinning cans.
            </p>
          </div>

          <img
            src="/images/acs/image2.png"
            alt="image"
            className={styles.div2Image}
          />
        </div>
      </div>

      <div className={styles.div3}>
        <div className={styles.div3Left}>
          <h5 className={styles.heading2}>
            HDPE Body Sheet &<br />
            Bottom Binders
          </h5>

          <div className={styles.div3Inner}>
            <img
              src="/images/acs/image3.png"
              alt="image"
              className={styles.div3InnerImg}
            />
            <p className={`${styles.para} ${styles.div3Para}`}>
              Crafted from premium 100% virgin HDPE, our body sheet and bottom
              binders ensure durability and resistance to wear. Welded with
              precision on Siemens PLC-controlled German machines, these
              components maintain a seamless shape, preventing sliver damage for
              smooth operation.
            </p>
          </div>
        </div>

        <div className={styles.div3Right}>
          <h5 className={styles.subHeading} style={{ color: COLORS.white }}>
            Top & Bottom Covers
          </h5>
          <p className={`${styles.para} ${styles.div3Para}`}>
            Our covers, available in plastic, ABS, and galvanized iron, feature
            anti-slip surfaces for enhanced grip. Top covers anchor sliver coils
            securely with a friction surface. Lightweight and robust, they offer
            superior protection for spinning cans, ensuring optimal performance.
          </p>

          <img
            src="/images/acs/image4.png"
            alt="image"
            className={styles.div3RightImg}
          />
        </div>
      </div>

      <div className={styles.div4}>
        <h5 className={styles.subHeading}>
          Springs that Perform:
          <br />
          Precision and Durability in Every Coil
        </h5>

        <p className={`${styles.para} ${styles.div4Para}`}>
          Our top-of-the-line springs deliver consistent performance and
          durability. Made from high-carbon spring steel and expertly tempered,
          they ensure smooth and efficient sliver movement. Enhance your
          operations with our reliable and long-lasting springs.
        </p>
      </div>

      <div className={styles.div5}>
        <div className={styles.div5Content}>
          <h5 className={styles.subHeading}>
            <span className={styles.special}>Box Type</span> Spring
          </h5>
          <ul>
            <li className={`${styles.para} ${styles.div5Para}`}>
              Precision-tempered to maintain uniform tension, ensuring smooth
              and reliable sliver handling in high-speed operations.
            </li>
            <li className={`${styles.para} ${styles.div5Para}`}>
              Made from high-carbon spring steel wire (ISO specs), hardened and
              tempered for maximum strength and longevity.
            </li>
          </ul>
          <img
            src="/images/acs/spring1.png"
            alt="spring image"
            className={styles.div5Image}
          />
        </div>

        <div className={styles.div5Content}>
          <h5 className={styles.subHeading}>
            <span className={styles.special}>Pantograph</span> Spring
          </h5>
          <ul>
            <li className={`${styles.para} ${styles.div5Para}`}>
              Engineered for superior flexibility with a unique design, ensuring
              efficient sliver movement and minimizing breakage.
            </li>
            <li className={`${styles.para} ${styles.div5Para}`}>
              Crafted from high-quality materials, these springs endure the
              demands of high-speed operations, providing long-lasting
              performance.
            </li>
          </ul>
          <img
            src="/images/acs/spring2.png"
            alt="spring image"
            className={styles.div5Image}
          />
        </div>
      </div>

      <ContactUs />

      <Footer />
    </div>
  );
};

export default AccessoriesPage;
