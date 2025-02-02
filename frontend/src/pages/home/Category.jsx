import { PiPottedPlant } from "react-icons/pi";
import {
  GiFlowerPot,
  GiCactus,
  GiHerbsBundle,
  GiFruitBowl,
  GiTomato,
  GiWaterSplash,
  GiMedicines,
  GiGrass,
  GiPerfumeBottle,
} from "react-icons/gi";

const categories = [
  {
    name: "Flower",
    icon: <GiFlowerPot className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Indoor",
    icon: <PiPottedPlant className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Succulent",
    icon: <GiCactus className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Herb",
    icon: <GiHerbsBundle className="w-10 h-10 text-green-600" />,
  },
  { name: "Fruit", icon: <GiFruitBowl className="w-10 h-10 text-green-600" /> },
  {
    name: "Vegetable",
    icon: <GiTomato className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Aquatic",
    icon: <GiWaterSplash className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Medicinal",
    icon: <GiMedicines className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Groundcover",
    icon: <GiGrass className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Aromatic",
    icon: <GiPerfumeBottle className="w-10 h-10 text-green-600" />,
  },
];

const Category = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-5 gap-4 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg"
          >
            {category.icon}
            <h3 className="text-center text-sm font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
