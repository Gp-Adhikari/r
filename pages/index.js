import Header from "../components/Header.component";
import MostVisited from "../components/MostVisited.component";
import RecommendedCardContainer from "../components/Recommended/RecommendedCardContainer";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="Home" desc="Description" />
      <Header />
      <MostVisited />
      <RecommendedCardContainer />
    </>
  );
};
export default Home;
