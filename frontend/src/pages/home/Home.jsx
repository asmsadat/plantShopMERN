import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import Category from "./Category";
import HeroSlider from "./HeroSlider";
import NewArrival from "./NewArrival";

function Home() {
  return (
    <>
      <HeroSlider />
      <Category />
      <NewArrival/>
      <TopSellers />
      <Recommended />
    </>
  );
}

export default Home;
