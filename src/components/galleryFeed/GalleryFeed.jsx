/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./GalleryFeed.module.css";
// import BussinessVerticals from "../bussinessVerticals/BussinessVerticals";
import { useState, useEffect, useRef } from "react";
// import { auth, firestore } from "../../firebase/firebase";
// import {
//   collection,
//   onSnapshot,
//   query,
//   orderBy,
//   where,
//   limit,
// } from "firebase/firestore";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { GalleryData } from "../../assets/galleryData";
import GalleryTitleCard from "../galleryTitleCard/GalleryTitleCard";
import GalleryFeedCard from "../galleryFeedCard/GalleryFeedCard";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";

const Categories = [
  "All",
  "Infrastructure",
  "Workforce",
  "Vision",
  "Events",
  "Clients",
];

const GalleryFeed = () => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(0);
  //   const [content, setContent] = useState("");
  //   const [user] = useAuthState(auth);

  const initialColors = Categories.map((item, index) =>
    index === 0 ? COLORS.orange : COLORS.gray3
  );

  const [buttonColors, setButtonColors] = useState(initialColors);

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(Categories.length).fill(COLORS.gray3);
    newButtonColors[index] = COLORS.orange;
    setButtonColors(newButtonColors);
  };

  const middleDivRef = useRef(null);
  const { pathname } = useLocation();
  const currentPage = new URLSearchParams(window.location.search).get("page");

  useEffect(() => {
    middleDivRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, currentPage]);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const EVENTS_PER_PAGE = 5;
  const hasPrev = EVENTS_PER_PAGE * (page - 1) > 0;
  const hasNext = EVENTS_PER_PAGE * page < GalleryData.length;
  const startIndex = EVENTS_PER_PAGE * (page - 1);
  const endIndex = Math.min(startIndex + EVENTS_PER_PAGE, GalleryData.length);

  //   useEffect(() => {
  //     let q;

  //     if (activeButton === 0) {
  //       q = query(collection(firestore, "events"), orderBy("date", "desc"));
  //     } else {
  //       q = query(
  //         collection(firestore, "events"),
  //         where("category", "==", BussinessVerticalsItems[activeButton]),
  //         orderBy("date", "desc")
  //       );
  //     }

  //     const unsubscribe = onSnapshot(q, (snapshot) => {
  //       setEventsData(snapshot.docs);
  //       // console.log(snapshot.docs[0].data());
  //     });

  //     return unsubscribe;
  //   }, [activeButton]);

  //   useEffect(() => {
  //     const q = query(
  //       collection(firestore, "events"),
  //       orderBy("date", "desc"),
  //       limit(3)
  //     );

  //     const unsubscribe = onSnapshot(q, (snapshot) => {
  //       setAllEventsData(snapshot.docs);
  //     });

  //     return () => unsubscribe();
  //   }, []);

  //   const formatDate = (dateString) => {
  //     const date = new Date(dateString);
  //     const options = { day: "2-digit", month: "long", year: "numeric" };
  //     return date.toLocaleDateString("en-GB", options);
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h5 className={styles.divHeading}>Spotlight</h5>
        <hr className={styles.hr} />
        <div className={styles.titleCardDiv}>
          {GalleryData.slice(0, 4).map((item, index) => (
            <GalleryTitleCard
              key={index}
              //   category={item.data().category}
              //   date={formatDate(item.data().date)}
              //   heading={item.data().heading}
              //   description={item.data().description}
              //   imagePath={item.data().images}
              //   logoPath={item.data().images}

              category={item.category}
              date={item.date}
              heading={item.heading}
              description={item.description}
              imagePath={item.imagePath}
              logoPath={item.logoPath}
            />
          ))}
          <hr className={styles.hr} />
        </div>

        <Button
          content="Enquire Us"
          bgColor={COLORS.orange}
          onClick={() => navigate("/#contactDiv")}
        />
      </div>

      <div className={styles.middleDiv} ref={middleDivRef}>
        {GalleryData.slice(startIndex, endIndex).map((item, index) => (
          <GalleryFeedCard
            key={index}
            // category={item.data().category}
            // date={formatDate(item.data().date)}
            // heading={item.data().heading}
            // description={item.data().description}
            // imagePath={item.data().images}
            // logoPath={item.data().images}

            category={item.category}
            date={item.date}
            heading={item.heading}
            description={item.description}
            imagePath={item.imagePath}
            logoPath={item.logoPath}
          />
        ))}

        <Pagination
          page={page}
          hasPrev={hasPrev}
          hasNext={hasNext}
          parentPage="gallery"
        />
      </div>

      <div className={styles.bvContainer}>
        <h5 className={styles.divHeading}>Media Categories</h5>
        <hr className={styles.hr} />
        <div className={styles.bvDiv}>
          {Categories.map((item, index) => (
            <button
              style={{ backgroundColor: buttonColors[index] }}
              className={`${styles.bvItem} ${
                index === activeButton ? styles.active : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFeed;
