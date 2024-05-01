import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = (props) => {
  const category = props.resCategory;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVegOnly, setShowVegOnly] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleVegOnlyChange = () => {
    setShowVegOnly(!showVegOnly);
  };

  const filteredCategory = showVegOnly
    ? category.filter((item) =>
        item.card.card.itemCards.every(
          (card) => card?.card?.info?.itemAttribute?.vegClassifier === "VEG"
        )
      )
    : category;

  return (
    <div className="mt-6">
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Veg Only
        </span>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleVegOnlyChange}
        />
        <div className="relative w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600 "></div>
      </label>

      {filteredCategory?.map((item, index) => (
        <div key={item.card.card.title} className={`border-b ${activeIndex === index ? 'border-b-8' : ''}`}>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="font-semibold text-lg flex my-4">
              {item.card.card.title}
              <div className="ml-2">
                ({item.card.card.itemCards.length})
              </div>
            </div>
            <div className="text-xl cursor-pointer">
              {activeIndex === index ? "🔼" : "🔽"}
            </div>
          </div>
          {activeIndex === index && (
            <ItemCards
              key={item.card.card.title}
              itemData={item.card.card.itemCards}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;
