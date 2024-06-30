import { COLORS } from "../assets/constants";
import Banner from "../components/Banner/Banner";
import styles from "./Homepage.module.css";
import CoreValues from "../components/coreValues/CoreValues";
import { CoreValuesData } from "../assets/coreValuesData";
import SliverCan from "../components/sliverCan/SliverCan";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import ContactUs from "../components/contactUs/ContactUs";
import Accessories from "../components/accessories/Accessories";
import Navbar from "../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the "#" from the hash
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Call the handler initially in case there's already a hash in the URL
    handleHashChange();

    // Add event listener for hash change
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  const heading = `Your <span style="color:${COLORS.orange}">Trusted Partner</span><br /> in Silver Handling<br /> Systems`;
  const description = `• Reach your sustainability goals with <span style="color:${COLORS.orange}">our expert solution</span>, tailored to your company's needs •`;

  return (
    <div className={styles.contianer}>
      <Navbar pageType="" />

      <Banner
        imagePath="/images/home_banner.png"
        heading={heading}
        description={description}
      />

      <CoreValues heading="Our Teaming Principles" cardData={CoreValuesData} />

      <SliverCan />

      <Accessories />

      <div className={styles.div5}>
        <div className={styles.innerDiv5}>
          <h5 className={styles.heading}>
            Durable Castor Wheels for Smooth Mobility
          </h5>
          <p className={styles.desc}>
            We at ChemBizR, partner with global clients to unleash unique
            solutions across a variety of business verticals.
          </p>

          <Button
            content="Insights"
            bgColor={COLORS.orange}
            onClick={() => navigate("/castor")}
          />
        </div>

        <img src="/images/div5.png" alt="image" />
      </div>

      <ContactUs />

      <Footer pageType="" />
    </div>
  );
};

export default Homepage;
