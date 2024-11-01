/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropdownButton from "../dropdownButton/DropdownButton";

const Navbar = ({ bgColor, pageType }) => {
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
        isScrolled || bgColor ? styles.active : ""
      }`}
      style={{ backgroundColor: bgColor && bgColor }}
    >
      <div onClick={() => navigate("/")} className={styles.logoDiv}>
        <img
          // src={isScrolled ? "/images/Logo2.png" : "/images/Logo.png"}
          src={
            bgColor
              ? "/images/Logo2.png"
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
              ? COLORS.blue
              : isScrolled
              ? COLORS.blue
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
        <Link
          to="/"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
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
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
          }}
        >
          About Us
        </Link>
        {/* <Link
          to="/"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
          }}
        >
          Products
        </Link> */}
        <DropdownButton
          content="Products"
          textColor={
            isSmallScreen
              ? COLORS.blue
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white
          }
          modalContents={[
            { desc: "Sliver Can", link: "/sliver-can" },
            { desc: "Accessories", link: "/accessories" },
            { desc: "Castor Wheels", link: "/castor" },
          ]}
        />
        <Link
          to="/about-us#clients"
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
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
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
          }}
        >
          Gallery
        </Link>
        <Link
          to={`/${pageType}#contactDiv`}
          className={styles.link}
          style={{
            color: isSmallScreen
              ? COLORS.blue
              : isScrolled || bgColor
              ? COLORS.blue
              : COLORS.white,
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
            ? COLORS.blue
            : isScrolled
            ? COLORS.blue
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
