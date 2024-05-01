import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResInfo(data?.data);
  };
  console.log(resInfo);
  return resInfo;
};
export default useRestaurantMenu;
