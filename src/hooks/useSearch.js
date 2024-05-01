import star from "../assets/star.png";
import { Link } from "react-router-dom";
import { IMAGE_ID_URL } from "../utils/constant";

export const useSearch = ({ card }) => {
  return (
    <Link
      key={card?.card?.card?.info?.id}
      to={`/restaurants/${card?.card?.card?.info.id}`}
    >
      <div className="flex ml-[20px] pb-4 cursor-pointer p-2" key={card.id}>
        <div>
          <img
            className="w-[120px] h-[100px] rounded-lg"
            src={IMAGE_ID_URL + card?.card?.card?.info?.cloudinaryImageId}
            alt={card?.card?.card?.info?.name}
          />
        </div>
        <div className="ml-[20px] w-[70%] hover:bg-gray-200 bg-slate-100 p-3 rounded-md">
          <div className="font-semibold truncate text-lg">
            {card?.card?.card?.info?.name}
          </div>
          <div className="truncate text-[#676a6d]">
            {card?.card?.card?.info?.cuisines}
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="w-5  h-5 p-1 bg-green-600 rounded-full"
                src={star}
                style={{
                  backgroundColor:
                    card?.card?.card?.info?.avgRating >= 4
                      ? "#28a745"
                      : "#fd7e14",
                }}
                alt="Star"
              />
              <span
                className={`text-sm ml-1 ${
                  card?.card?.card?.info?.avgRating >= 4
                    ? "text-green-700"
                    : "text-orange-400"
                }`}
              >
                {card?.card?.card?.info?.avgRating}
              </span>
            </div>
            <div className="ml-[10px]">
              ₹{card?.card?.card?.info?.costForTwo / 100}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
