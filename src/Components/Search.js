import React, { useEffect, useState } from "react";
import { SUGGEST_API } from "../utils/constant";
import SearchRes from "./SearchRes";
import SearchSuggestion from "./SearchSuggestion";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;
    const timeoutId = setTimeout(() => {
      getSearchSuggestion();
      setSelectedSuggestion(null);
    }, 250);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    if (!selectedSuggestion) return;
    fetchData();
  }, [selectedSuggestion]);

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(SUGGEST_API + searchTerm);
      const data = await response.json();
      setSuggestion(data?.data?.suggestions || []);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9351929&lng=77.62448069999999&str=${selectedSuggestion}&trackingId=null&submitAction=STORED_SEARCH&queryUniqueId=ca162fff-47fc-256d-6239-c5416296ee1b&selectedPLTab=RESTAURANT`
      );
      const data = await response.json();
      setSearchItem(
        data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []
      );
    } catch (error) {
      console.error("Error fetching search items:", error);
    }
  };

  const suggestFilter = suggestion?.filter(
    (cards) => cards?.type === "RESTAURANT"
  );

  const filteredSearchItems = searchItem?.filter(
    (cards) => cards?.card.card.info.name === selectedSuggestion
  );

  const handleSuggestionClick = (text) => {
    setSelectedSuggestion(text);
  };

  return (
    <div className="w-[55%] mx-auto">
      <div className="w-full my-10">
        <input
          className="border-2 w-full p-3"
          type="text"
          placeholder="Search Restaurant and Food...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {selectedSuggestion ? (
          <SearchRes
            filteredSearchItems={filteredSearchItems}
            searchItem={searchItem}
          />
        ) : (
          <SearchSuggestion
            suggestion={suggestFilter}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
