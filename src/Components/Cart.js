import { useSelector, useDispatch } from "react-redux";
import { addItem, decreaseQuantity } from "../utils/cartSlice";
import NON_VEG from "../assets/NON_VEG.png";
import VEG from "../assets/VEG.jpeg";
import emptycart from "../assets/emptycart.png";
import { IMAGE_ID_URL } from "../utils/constant";

const Cart = () => {
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

  const handleSubtract = (card) => {
    dispatch(decreaseQuantity(card));
  };

  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div>
        <img className="mx-auto" src={emptycart} alt="Empty Cart" />
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.totalPrice || 0),
    0
  );

  return (
    <div className="max-w-lg mx-auto p-3 shadow-xl rounded-md">
      <div className="grid grid-cols-1 gap-4">
        {cartItems?.map((card) => (
          <div
            key={card?.card?.info?.id}
            className="flex items-center justify-between bg-white  rounded-lg"
          >
            <div>
              <img
                className="w-[80px] rounded-xl"
                src={IMAGE_ID_URL + card?.card?.info.imageId}
              />
            </div>
            <div className="m-4 flex items-center">
              <div>
                {card?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <img
                    className="w-[15px]"
                    src={NON_VEG}
                    alt="Non-Vegetarian"
                  />
                ) : (
                  <img className="w-[15px]" src={VEG} alt="Vegetarian" />
                )}
              </div>

              <div className="text-lg w-[150px] ml-[20px] mt-2 truncate ">
                {card?.card?.info?.name}
              </div>
            </div>
            <div className="flex items-center justify-evenly">
              <div>
                {itemCounts[card?.card?.info?.id] > 0 ? (
                  <div className=" bg-slate-50 ml-[10px] shadow-lg rounded-lg px-2">
                    <button onClick={() => handleSubtract(card)}>-</button>
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
              <div className="text-md pt-[10px] ml-[15px]">
                ₹{card?.totalPrice / 100}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t-2 pt-[10px]">
        TO PAY <span>₹{totalPrice / 100}</span>
      </div>
    </div>
  );
};

export default Cart;
