import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantSlide = ({ restaurant }) => (
  <div>
    <Link
      key={restaurant?.info?.id}
      to={`/restaurants/${restaurant?.info?.id}`}
    >
      <RestaurantCard resData={restaurant?.info} />
    </Link>
  </div>
);

export default RestaurantSlide;
