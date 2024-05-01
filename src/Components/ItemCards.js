import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseQuantity } from "../utils/cartSlice";
import { IMAGE_ID_URL } from "../utils/constant";
import NON_VEG from "../assets/NON_VEG.png";
import VEG from "../assets/VEG.jpeg";

const ItemCards = (props) => {
  const itemCards = props.itemData;
  const dispatch = useDispatch();
  const itemCounts = useSelector((state) =>
    state.cart.items.reduce((acc, item) => {
      acc[item?.card?.info?.id] = item.quantity;
      return acc;
    }, {})
  );

  const handleAdd = (card) => {
    dispatch(addItem(card));
  };

  const handleSubstract = (card) => {
    dispatch(decreaseQuantity(card));
  };

  return (
    <div>
      {itemCards.map((card) => (
        <div
          key={card?.card?.info?.id}
          className="flex items-center justify-between border-b-2 pb-[10px]"
        >
          <div className="m-4">
            <div>
              {card?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <img className="w-[15px]" src={NON_VEG} alt="Non-Vegetarian" />
              ) : (
                <img className="w-[15px]" src={VEG} alt="Vegetarian" />
              )}
            </div>

            <div className="text-lg mt-2">{card?.card?.info?.name}</div>
            <div className="text-md">₹{card?.card?.info?.price / 100}</div>
            <div className="truncate text-[#616A6B] text-sm w-[500px]">
              {card?.card.info.description}
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[120px] h-[100px] rounded-md"
              src={IMAGE_ID_URL + card?.card?.info?.imageId}
              alt={card?.card?.info?.name}
            />
            <div className="absolute bottom-2">
              {itemCounts[card?.card?.info?.id] > 0 ? (
                <div className="bg-slate-50 ml-[10px] shadow-lg rounded-lg px-2">
                  <button onClick={() => handleSubstract(card)}>-</button>
                  <input
                    className="w-[20px] ml-[10px] outline-none"
                    value={itemCounts[card?.card?.info?.id]}
                    readOnly
                  />
                  <button onClick={() => handleAdd(card)}>+</button>
                </div>
              ) : (
                <button
                  className="bg-green-300 ml-[20px] px-2 rounded-md hover:bg-green-500"
                  onClick={() => handleAdd(card)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
