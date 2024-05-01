import { useState, useEffect } from "react";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { Offer_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Offer = () => {
  const [cards, setCards] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(Offer_API);
    const data = await response.json();
    setCards(
      data?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (cards === undefined) {
    return (
      <div className="px-[12.8%]">
        <Shimmer />
      </div>
    );
  }

  const RestaurantOfferCard = withOfferLabel(RestaurantCard);

  return (
    <div >
      <div className="flex flex-wrap mx-auto px-[11.8%] py-4">
        {cards?.map((card) => (
          <Link key={card?.info?.id} to={`/restaurants/${card?.info?.id}`}>
            {card?.info?.aggregatedDiscountInfoV3?.header &&
            card?.info?.aggregatedDiscountInfoV3?.subHeader ? (
              <RestaurantOfferCard resData={card?.info} />
            ) : (
              <RestaurantCard resData={card?.info} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Offer;
