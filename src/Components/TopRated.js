import { useSelector } from "react-redux";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantSlide from "./RestaurantSlide";

const TopRated = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const fetchData = useSelector((store) => store.bodyApi.fetchData);
  const ListOfRestaurant =
    fetchData?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    arrows: false,
    slidesToShow: Math.min(ListOfRestaurant?.length, 4), // Ensure at least 4 slides are visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden pb-12 border-b-2">
      <div className="flex flex-row-reverse">
        <button className="button" onClick={next}>
          ➡️
        </button>
        <button className="button" onClick={previous}>
          ⬅️
        </button>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {ListOfRestaurant?.map((restaurant) => (
          <RestaurantSlide key={restaurant.id} restaurant={restaurant} />
        ))}
      </Slider>
    </div>
  );
};

export default TopRated;
