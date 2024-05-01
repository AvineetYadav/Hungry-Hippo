import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import TopRated from "./TopRated";
import Footer from "./Footer";
import { useBodyApiFetch } from "../hooks/useBodyApiFetch";

const Body = () => {
  const fetchData = useSelector((store) => store.bodyApi.fetchData);
  const [isLoading, setIsLoading] = useState(true);

  useBodyApiFetch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const ListOfRestaurant =
    fetchData?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants || [];

  return (
    <div>
      <div className="flex flex-wrap justify-between mx-auto pb-[4%] px-[11.8%]">
        {isLoading ? (
          <Shimmer />
        ) : (
          <>
            <div className="font-bold text-xl p-1">Top Rated Restaurants</div>
            <TopRated />
            <div className="w-full font-bold text-xl p-4 pt-8">
              Restaurants with online food delivery in Indore
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ListOfRestaurant.map((res) => (
                <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
                  <div className="h-full"> {/* Ensure all cards have the same height */}
                    <RestaurantCard resData={res.info} />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
