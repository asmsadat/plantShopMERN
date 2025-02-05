import TopSellers from "./TopSellers";
import Category from "./Category";
import HeroSlider from "./HeroSlider";
import NewArrival from "./NewArrival";
import BrowseProducts from "./BrowseProducts";

function Home() {
  return (
    <>
      <HeroSlider />
      <Category />
      <BrowseProducts/>
      <NewArrival/>
      <TopSellers />
    </>
  );
}

export default Home;
