/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import LinkedinIcon from "../../icons/LinkedinIcon";
import styles from "./Footer.module.css";

const Footer = ({ pageType }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <div className={styles.logoDiv}>
            <img
              src="/images/Logo.png"
              alt="logo"
              onClick={() => navigate("/")}
            />
            <h3 className={styles.heading}>
              GS <span style={{ color: COLORS.orange }}>Can</span>
            </h3>
          </div>
          <div className={styles.anchorDiv}>
            <Link to="/" className={styles.anchor}>
              Home
            </Link>
            <Link to="/about-us" className={styles.anchor}>
              About Us
            </Link>
            <Link to="/sliver-can" className={styles.anchor}>
              Sliver Can
            </Link>
            <Link to="/accessories" className={styles.anchor}>
              Accessories
            </Link>
            <Link to="/castor" className={styles.anchor}>
              Castor
            </Link>
            <Link to="/gallery" className={styles.anchor}>
              Gallery
            </Link>
            <Link to={`/${pageType}#contactDiv`} className={styles.anchor}>
              Contact Us
            </Link>
          </div>

          <div className={styles.mobileAnchorDiv}>
            <div className={styles.innerAnchorDiv}>
              <Link to="/" className={styles.anchor}>
                Home
              </Link>
              <Link to="/about-us" className={styles.anchor}>
                About Us
              </Link>
              <Link to="/sliver-can" className={styles.anchor}>
                Sliver Can
              </Link>
            </div>

            <div className={styles.innerAnchorDiv}>
              <Link to="/castor" className={styles.anchor}>
                Castor
              </Link>
              <Link to="/gallery" className={styles.anchor}>
                Gallery
              </Link>
              <Link to={`/${pageType}#contactDiv`} className={styles.anchor}>
                Contact Us
              </Link>
            </div>

            <div className={styles.innerAnchorDiv}>
              <Link to="/accessories" className={styles.anchor}>
                Accessories
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.para}>Follow Us On</p>
          <div
            style={{ cursor: "pointer" }}
            // className={styles.icon}
            // onClick={() =>
            //   window.open(
            //     "https://www.linkedin.com/company/chembizr/",
            //     "_blank"
            //   )
            // }
          >
            <LinkedinIcon color={COLORS.white} />
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyrightText}>
        Copyrighted &copy; {new Date().getFullYear()} Upload by AntiNode
        Technologies.
      </p>
    </div>
  );
};

export default Footer;
