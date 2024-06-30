/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CarouselCard from "../carouselCard/CarouselCard";
import styles from "./CarouselSection.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = ({ heading, description, cardData, divId }) => {
  const responsiveCapabilities = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1350 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1350, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.capabilitesContainer} id={divId}>
      <h5 className={styles.heading}>{heading}</h5>
      <hr className={styles.hr} />

      <div className={styles.paraDiv}>
        <p className={styles.para}>{description}</p>
      </div>

      <div className={styles.CapabilitiesCardDiv}>
        <Carousel
          responsive={responsiveCapabilities}
          showDots={showDots}
          arrows={!showDots}
          infinite={true}
        >
          {cardData.map((item, index) => (
            <div key={index} className={styles.capabilitesInnerCardDiv}>
              <CarouselCard
                imagePath={item.imagePath}
                heading={item.heading}
                description={item.description}
                bgColor={item.bgColor}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
