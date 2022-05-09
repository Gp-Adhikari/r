import Header from "../components/Header.component";
import MostVisited from "../components/MostVisited.component";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="Home" desc="Description" />
      <Header />
      <MostVisited />
    </>
  );
};
export default Home;
