/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CoreValuesCard from "../coreValuesCard/CoreValuesCard";
import styles from "./CoreValues.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CoreValues = ({ heading, cardData, hrColor }) => {
  const [showDots, setShowDots] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1050 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1050, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      <hr style={{ border: `1px solid ${hrColor}` }} />
      <div className={styles.cardContianer}>
        <Carousel
          responsive={responsive}
          arrows={!showDots}
          showDots={showDots}
        >
          {cardData.map((item, index) => (
            <div key={index} className={styles.outerCard}>
              <CoreValuesCard
                imagePath={item.imagePath}
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CoreValues;
