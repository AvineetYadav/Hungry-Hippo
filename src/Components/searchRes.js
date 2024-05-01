import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useSearch } from "../hooks/useSearch";

const SearchRes = ({ filteredSearchItems, searchItem }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (loading) {
    return <Shimmer />;
  }
  
  return (
    <div className="w-[100%] mb-[50px] ">
      {filteredSearchItems.map((card) => useSearch({ card }))}
      <div className="grid grid-cols-2">
        {searchItem.slice(3).map((card) => useSearch({ card }))}
      </div>
    </div>
  );
};

export default SearchRes;
