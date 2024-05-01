import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_URL} from "../utils/constant"
import { addFetchData } from "../utils/BodySlice";

export const useBodyApiFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      dispatch(addFetchData(data?.data?.cards));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
};
