import { IMAGE_ID_URL } from "../utils/constant";
import star from "../assets/star.png";

const RestaurantCard = (props) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    areaName,
    sla: { slaString },
  } = props?.resData;

  return (
    <div className="m-4 w-64 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-900 cursor-pointer">
      <img
        className="rounded-xl w-full h-40 object-cover"
        src={IMAGE_ID_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="px-3 py-2">
        <div className="font-bold text-lg truncate">{name}</div>
        <div className="truncate text-sm text-[#676a6d]">{cuisines}</div>
        <div className="truncate text-sm text-[#676a6d]">{areaName}</div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center space-x-1">
            <img
              className="w-5 h-5 p-1 bg-green-600 rounded-full"
              src={star}
              style={{ backgroundColor: avgRating > 4 ? "#28a745" : "#fd7e14" }}
              alt="Star"
            />
            <span
              className={`text-sm ${
                avgRating >= 4 ? "text-green-700" : "text-orange-400"
              }`}
            >
              {avgRating}
            </span>
          </div>
          <div className="text-xs text-right text-[#676a6d]">
            Delivery Time: {slaString}
          </div>
        </div>
      </div>
    </div>
  );
};

// Higher-order component to add offer label to RestaurantCard
export const withOfferLabel = (WrappedComponent) => {
  return (props) => {
    const { header, subHeader } = props?.resData?.aggregatedDiscountInfoV3;
    return (
      <div className="relative transform hover:scale-105 transition-transform duration-900 cursor-pointer">
        <WrappedComponent {...props} />
        <label className="absolute top-8 bg-green-300 px-2 rounded-md">
          {header} {subHeader}
        </label>
      </div>
    );
  };
};

export default RestaurantCard;
