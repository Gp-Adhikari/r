import React from "react";
import Title from "../Title.component";
import styles from "../../styles/home.module.css";
import RecommendedCard from "./RecommendedCard";

const RecommendedCardContainer = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Title firstText=" Recommended" />
        <div className={styles.recommendedCardContainer}>
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
        </div>
      </div>
    </>
  );
};

export default RecommendedCardContainer;
