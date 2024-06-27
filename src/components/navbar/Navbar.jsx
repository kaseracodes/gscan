/* eslint-disable react/prop-types */
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ textColor, iconColor, bgColor }) => {
  const navigate = useNavigate();

  return (
      <div
        className={`${styles.container} ${styles.active}`}
        style={{ backgroundColor: bgColor && bgColor }}
      >
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img
            src={
              isScrolled || bgColor ? "/images/Logo.png" : "/images/logo2.png"
            }
            alt="logo"
            className={styles.logo}
          />
        </div>

        <div
          className={`${styles.rightContainer} ${
            navbarOpen ? styles.responsive_nav : ""
          }`}
        >
          <div className={styles.dropdownContainer}>
            <DropdownButton
              textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
              content="About"
              modalContents={[
                { desc: "Who Are We?", link: "/about-us" },
                { desc: "Career", link: "/careers" },
              ]}
              index="1"
            />
            <DropdownButton
              textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
              content="Services"
              modalContents={[
                { desc: "Industries", link: "/focus" },
                { desc: "Capabilities", link: "/capabilities" },
              ]}
              index="2"
            />
            <DropdownButton
              textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
              content="Highlights"
              modalContents={[
                { desc: "Insights", link: "/insights" },
                { desc: "News", link: "/news" },
                { desc: "Events", link: "/events" },
              ]}
              index="3"
            />
          </div>

          <div className={styles.buttonContainer}>
            {!userLoggedIn && (
              <Button
                content="Log in"
                bgColor="#333333"
                onClick={handleClickLogin}
              />
            )}
            {userLoggedIn && (
              <Button
                content="Log out"
                bgColor="#333333"
                onClick={handleClickLogout}
              />
            )}
            <Button
              content="Subscribe"
              bgColor="#FF9B42"
              onClick={() => {
                setStatus("");
                setOpenModal(true);
              }}
            />
          </div>

          <div className={styles.iconContainer}>
            <div
              className={styles.icon}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/chembizr/",
                  "_blank"
                )
              }
            >
              <LinkedinIcon
                color={isScrolled || navbarOpen ? COLORS.black : textColor}
              />
            </div>
            {/* <div className={styles.icon}>
            <SearchIcon
              className={styles.icon}
              color={isScrolled || navbarOpen ? COLORS.black : textColor}
            />
          </div> */}
          </div>

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
          style={{ color: !isScrolled ? iconColor : COLORS.black }}
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </div>
  );
};

export default Navbar;
