import { useState } from "react";
import ProductCard from "../products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllproductsQuery } from "../../redux/features/products/productAPI";

const categories = [
  "Choose a category",
  "Flower",
  "Indoor",
  "Succulent",
  "Herb",
  "Fruit",
  "Vegetable",
  "Aquatic",
  "Medicinal",
  "Groundcover",
  "Aromatic",
];

const BrowseProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a category");

  const { data: products = [] } = useFetchAllproductsQuery();
  console.log(products);

  const filteredProducts =
    selectedCategory === "Choose a category"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Browse Porducts</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredProducts.length > 0 &&
          filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard key={index} product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-center py-4">
      <button className="btn-primary px-6 flex flex-col items-center gap-1">
        <span className="whitespace-nowrap">All Products</span>
      </button>
      </div>
      
    </div>
  );
};

export default BrowseProducts;
