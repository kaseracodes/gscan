/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = ({ bgColor }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

  const showNavbar = () => {
    // navRef.current.classList.toggle("responsive_nav");
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${
        isScrolled && !bgColor ? styles.active : ""
      }`}
      style={{ backgroundColor: bgColor && bgColor }}
    >
      <div onClick={() => navigate("/")} className={styles.logoDiv}>
        <img
          // src={isScrolled ? "/images/Logo2.png" : "/images/Logo.png"}
          src={
            bgColor
              ? "/images/Logo.png"
              : isScrolled
              ? "/images/Logo2.png"
              : "/images/Logo.png"
          }
          alt="logo"
          className={styles.logo}
        />

        <h5
          style={{
            color: bgColor
              ? COLORS.white
              : isScrolled
              ? COLORS.blue3
              : COLORS.white,
          }}
        >
          GS <span style={{ color: COLORS.orange }}>Can</span>
        </h5>
      </div>

      <div
        className={`${styles.rightContainer} ${
          navbarOpen ? styles.responsive_nav : ""
        }`}
      >
        {/* <div className={styles.dropdownContainer}>
          <DropdownButton
            textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
            content="About"
            modalContents={[
              { desc: "Who Are We?", link: "/about-us" },
              { desc: "Career", link: "/careers" },
            ]}
            index="1"
          />
        </div> */}

        <Link
          to="/"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          About Us
        </Link>
        <Link
          to="/"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          Products
        </Link>
        <Link
          to="/"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          Clients
        </Link>
        <Link
          to="/gallery"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          Gallery
        </Link>
        <Link
          to="/contact-us"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : !isScrolled || bgColor
              ? COLORS.white
              : COLORS.blue,
          }}
        >
          Contact Us
        </Link>

        <button
          className={`${styles.faIcon} ${styles.closeBtn}`}
          style={{ color: COLORS.black }}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </div>

      <button
        className={styles.faIcon}
        style={{
          color: bgColor
            ? COLORS.white
            : isScrolled
            ? COLORS.blue3
            : COLORS.white,
        }}
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
