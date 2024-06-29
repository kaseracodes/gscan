import { ClientReview } from "../assets/clientReview";
import Banner from "../components/Banner/Banner";
import CarouselSection from "../components/carouselSection/CarouselSection";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import QualityPolicy from "../components/qualityPolicy/QualityPolicy";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  const heading = `Crafting<br />Excellence in<br />Sliver Can Solutions`;
  const description = `• Over 30 Years of Innovation, Quality, and Trust •`;

  return (
    <div className={styles.container}>
      <Navbar />

      <Banner
        imagePath="/images/about_us_banner.png"
        heading={heading}
        description={description}
      />

      <div className={styles.div1}>
        <h5 className={styles.heading}>About Us</h5>
        <hr className={styles.hr} />

        <div className={styles.div1Content}>
          <p>
            For more than three decades, G.S. Group has stood as a beacon of
            excellence in the jute industry, renowned for manufacturing
            top-quality jute yarn, sacking, hessian, and jute industry machinery
            accessories. Our state-of-the-art facilities, located across West
            Bengal and Bihar, boast an impressive annual production capacity of
            30,000 Metric Tons of jute yarn.
          </p>

          <p>
            Driven by innovation and a commitment to meet evolving industry
            demands, G.S. Group has diversified into the jute and textile
            machinery spares segment. Our product range has expanded to include
            high-quality pins, wooden staves, and sliver cans, solidifying our
            position as a comprehensive solutions provider in the industry.
          </p>

          <p>
            GS CAN, a dynamic division of the esteemed G.S. Group, specializes
            in the manufacturing of sliver cans and their accessories. Located
            in the Hooghly district of West Bengal, our cutting-edge
            manufacturing facility is equipped with modern imported machinery.
            We produce sliver cans ranging from 300mm to 1220mm in over a dozen
            vibrant color options, suitable for ring spinning and open-end rotor
            machines by leading manufacturers such as LMW, Reiter, and
            Trutzschler.
          </p>

          <p>
            At GS CAN, we pride ourselves on our advanced infrastructure and
            stringent quality standards. Every component is meticulously crafted
            in-house, ensuring unparalleled consistency and reliability. Our
            commitment to quality and innovation ensures that we not only meet
            but exceed industry standards, providing our clients with superior
            products that enhance their operational efficiency and product
            quality.
          </p>

          <p>
            Discover the difference with GS CAN - where tradition meets
            innovation, and quality is a promise we deliver every day.
          </p>
        </div>
      </div>

      <QualityPolicy />

      <CarouselSection
        heading="What our Clients say about us"
        description="Our partners include leading textile manufacturers and innovative jute producers who trust us for our superior quality products and reliable service. From industry giants to emerging enterprises, our clientele reflects our commitment to excellence"
        cardData={ClientReview}
      />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default AboutUsPage;
