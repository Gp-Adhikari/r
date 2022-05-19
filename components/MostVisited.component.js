import React from "react";
import Title from "./Title.component";
import styles from "../styles/home.module.css";
import Image from "next/image";

const MostVisited = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Title firstText="Today’s Most Visited" secondText="(Near You)" />
        <div className={styles.mostVisitedCardContainer}>
          <div className={styles.mostVisitedCard}>
            <div className={styles.mostVisitedCardImage}>
              <Image
                src="/home/image1.svg"
                width={590}
                height={450}
                alt="asdfasdf"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardDesign}>
              <Image
                src="/home/cardDesign.svg"
                width={590}
                height={450}
                alt="asdfasdf"
                layout="responsive"
                objectFit="cover"
              />
              <div className={styles.restaurantName}>
                <div className={styles.starContainer}>
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/half-star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                </div>
                <h1>Dine Fine</h1>
              </div>
            </div>
          </div>
          <div className={styles.mostVisitedCard}>
            <div className={styles.mostVisitedCardImage}>
              <Image
                src="/home/image1.svg"
                width={590}
                height={450}
                layout="responsive"
                alt="asdfasdf"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardDesign}>
              <Image
                src="/home/cardDesign.svg"
                width={590}
                height={450}
                alt="asdfasdf"
                layout="responsive"
                objectFit="cover"
              />
              <div className={styles.restaurantName}>
                <div className={styles.starContainer}>
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                  <Image
                    src="/home/half-star.svg"
                    width={25}
                    height={25}
                    alt="asdfasdf"
                  />
                </div>
                <h1>Dine Fine</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostVisited;
