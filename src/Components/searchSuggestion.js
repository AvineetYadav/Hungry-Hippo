import React from "react";
import { IMAGE_ID_URL } from "../utils/constant";

const SearchSuggestion = ({ suggestion, handleSuggestionClick }) => {
  return (
    <>
      {suggestion.map((cards, index) => (
        <div key={index}>
          <div
            className="flex items-center cursor-pointer hover:bg-slate-100 rounded-lg p-2"
            onClick={() => handleSuggestionClick(cards.text)}
          >
            <img
              className="w-24 h-24 bg-gray-200 rounded-md mr-4"
              src={IMAGE_ID_URL + cards?.cloudinaryId}
              alt={cards.text}
            />
            <div>
              <div className="font-semibold">{cards.text}</div>
              <div className="text-sm text-gray-600">{cards.type}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchSuggestion;
