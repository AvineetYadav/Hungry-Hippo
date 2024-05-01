import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { IMAGE_ID_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import star from "../assets/star.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return (
      <div className="px-[12.8%]">
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, areaName, avgRatingString, totalRatingsString } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const category = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (itemCard) => itemCard.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-full md:w-1/2 mx-auto px-12">
      <div className="flex flex-col pb-5 border-b-2 md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-[#616A6B] mt-2 text-sm">{cuisines}</div>
          <div className="text-[#616A6B] text-sm">{areaName}</div>
          <div className="flex items-center mt-2">
            <div>
              {resInfo?.cards[2].card.card.info.feeDetails.message && (
                <img className="w-5" src={IMAGE_ID_URL + resInfo?.cards?.[2]?.card?.card?.info?.feeDetails?.icon} />
              )}
            </div>
            <div className="ml-2 text-[#616A6B] text-sm">{resInfo?.cards?.[2]?.card?.card?.info?.feeDetails?.message}</div>
          </div>
        </div>
        <div className="md:border-2 md:p-2 md:rounded-lg md:ml-4 ">
          <div className="flex items-center pb-2">
            <img className="w-5 mr-2 bg-green-600 p-1 rounded-xl  " src={star} />
            <div className="text-green-700 font-bold">{avgRatingString}</div>
          </div>
          <div className="text-xs">{totalRatingsString}</div>
        </div>
      </div>
      <div>
        <RestaurantCategory resCategory={category} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
