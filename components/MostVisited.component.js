import React from "react";
import Title from "./Title.component";
import styles from "../styles/home.module.css";
import Image from "next/image";

const MostVisited = () => {
  return (
    <>
      <div className={styles.mostVisitedContainer}>
        <Title firstText="Today’s Most Visited" secondText="(Near You)" />
        <div className={styles.mostVisitedCardContainer}>
          <div className={styles.mostVisitedCard}>
            <Image
              src="/home/image1.svg"
              width="100%"
              height="100%"
              layout="responsive"
              alt="asdfasdf"
              objectFit="contain"
            />
            <Image
              className={styles.cardDesign}
              src="/home/cardDesign.svg"
              width="100%"
              height="100%"
              layout="responsive"
              alt="asdfasf"
              objectFit="contain"
            />
          </div>
          <div className={styles.mostVisitedCard}>
            <Image
              src="/home/image1.svg"
              width="100%"
              height="100%"
              alt="asdfasdf"
              layout="responsive"
              objectFit="contain"
            />
            <Image
              className={styles.cardDesign}
              src="/home/cardDesign.svg"
              width="100%"
              height="100%"
              alt="asdfasdf"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MostVisited;
