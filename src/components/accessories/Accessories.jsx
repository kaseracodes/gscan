/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AccessoriesData } from "../../assets/accessoriesData";
import styles from "./Accessories.module.css";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";

const Accessories = () => {
  const navigate = useNavigate();
  const [itemIndex, setItemIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleCardClick = (index) => {
    setItemIndex(index);
    setAnimate(true);
  };

  const handleNavigation = (index) => {
    navigate(`${AccessoriesData[index].link}`);
  };

  const TitleCard = ({ heading, bgColor, index }) => {
    return (
      <div
        key={index}
        className={styles.cardDiv}
        onClick={() => handleCardClick(index)}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={`${styles.innerCardDiv} ${
            index === itemIndex ? styles.clicked : ""
          }`}
        >
          <p
            className={styles.cardHeading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <h3
            className={styles.heading}
            onClick={() => navigate("/accessories")}
          >
            Sliver Can <span className={styles.special}>Accessories!</span>
          </h3>
          <p className={styles.desc}>
            Our sliver can accessories are designed to enhance the performance
            and durability of your sliver handling systems. From top rings and
            bands to bottom plates and springs, our high-quality components
            ensure smooth and efficient operations in textile production.
          </p>

          <div className={styles.cardContainer}>
            <div>
              <TitleCard
                heading={AccessoriesData[0].formattedHeading}
                bgColor={COLORS.sky}
                index={0}
              />

              <TitleCard
                heading={AccessoriesData[1].formattedHeading}
                bgColor={COLORS.blue3}
                index={1}
              />
            </div>

            <div>
              <TitleCard
                heading={AccessoriesData[2].formattedHeading}
                bgColor={COLORS.sky}
                index={2}
              />

              <TitleCard
                heading={AccessoriesData[3].formattedHeading}
                bgColor={COLORS.blue3}
                index={3}
              />

              <TitleCard
                heading={AccessoriesData[4].formattedHeading}
                bgColor={COLORS.sky}
                index={4}
              />
            </div>
          </div>
        </div>

        <div
          className={`${styles.rightDiv} ${animate ? styles.popOut : ""}`}
          onClick={() => handleNavigation(itemIndex)}
        >
          <img src={AccessoriesData[itemIndex].imagePath} alt="image" />
          <h5 className={styles.itemHeading}>
            {AccessoriesData[itemIndex].heading}
          </h5>
          <p className={styles.desc}>
            {AccessoriesData[itemIndex].description}
          </p>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <h3 className={styles.heading}>
          Sliver Can <span className={styles.special}>Accessories!</span>
        </h3>
        <div
          className={styles.cardDiv1}
          style={{ backgroundImage: `url(${AccessoriesData[0].imagePath})` }}
          onClick={() => handleNavigation(0)}
        >
          <div className={styles.mobileInnerCardDiv}>
            <h5 className={styles.itemHeading}>{AccessoriesData[0].heading}</h5>
          </div>
        </div>

        <div className={styles.mobileInnerContainer}>
          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${AccessoriesData[1].imagePath})` }}
            onClick={() => handleNavigation(1)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: AccessoriesData[1].formattedHeading,
                }}
              ></h5>
            </div>
          </div>

          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${AccessoriesData[2].imagePath})` }}
            onClick={() => handleNavigation(2)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: AccessoriesData[2].formattedHeading,
                }}
              ></h5>
            </div>
          </div>
        </div>

        <div className={styles.mobileInnerContainer}>
          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${AccessoriesData[3].imagePath})` }}
            onClick={() => handleNavigation(3)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: AccessoriesData[3].formattedHeading,
                }}
              ></h5>
            </div>
          </div>

          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${AccessoriesData[4].imagePath})` }}
            onClick={() => handleNavigation(4)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: AccessoriesData[4].formattedHeading,
                }}
              ></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
