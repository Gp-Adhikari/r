import React from "react";
import styles from "../../styles/home.module.css";
import Image from "next/image";

const RecommendedCard = () => {
  return (
    <>
      <div className={styles.recommendedCard}>
        <div className={styles.recommendedCardDetail}>
          <div className={styles.recommendedCardWrapper}>
            <div className={styles.recommendedCardImage}>
              <Image
                src="/home/cardImage.jpg"
                width={280}
                height={280}
                alt="asdfasdf"
              />
            </div>
            <div className={styles.recommendedCardTextWrapper}>
              <div className={styles.verifiedBadge}>
                <Image
                  src="/home/verifiedicon.svg"
                  width={12}
                  height={12}
                  alt="verified icon"
                />
                <p>Verified</p>
              </div>
              <h1>Dine Fine</h1>
              <div className={styles.starContainerSmall}>
                <Image
                  src="/home/star.svg"
                  width={18}
                  height={18}
                  alt="star icon"
                />
                <Image
                  src="/home/star.svg"
                  width={18}
                  height={18}
                  alt="star icon"
                />
                <Image
                  src="/home/star.svg"
                  width={18}
                  height={18}
                  alt="star icon"
                />
                <Image
                  src="/home/star.svg"
                  width={18}
                  height={18}
                  alt="star icon"
                />
                <Image
                  src="/home/half-star.svg"
                  width={18}
                  height={18}
                  alt="star icon"
                />
              </div>
              <p className={styles.restaType}>Restaurant</p>
            </div>
          </div>
          <div className={styles.recommendedCardDesc}>
            <h4>Description</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              aut natus illum voluptatum omnis sequi iure illo autem eligendi
              fugiat!
            </p>
            <p className={styles.viewDetailButton}>View</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedCard;
