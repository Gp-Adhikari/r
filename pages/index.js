import Header from "../components/Header.component";
import SEO from "../components/SEO";
import Title from "../components/Title.component";

const Home = () => {
  return (
    <>
      <SEO title="Home" desc="Description" />
      <Header />
      <Title text="Today’s Most Visited" />
      <p>Home</p>
    </>
  );
};
export default Home;
