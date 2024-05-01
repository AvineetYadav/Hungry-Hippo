import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#37718E" }} className="min-h-[100vh]">
      <div>
        {user ? (
          <div className="flex justify-between items-center -mt-2 px-5 py-16">
            <div className="flex flex-col">
              <div className="text-[32px] text-white font-bold">
                {user.displayName}
              </div>
              <div className="text-base text-white ">{user.email}</div>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-red-500 text-white py-2 px-4 rounded text-xl font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{ backgroundColor: "#37718E" }}
            className="flex justify-center -mt-2 p-5"
          >
            <div className="text-[32px] text-white font-bold">
              Welcome! Please login to see your account.
            </div>
          </div>
        )}
      </div>
      <div className="flex ml-5 bg-white p-10">
        <div
          style={{ backgroundColor: "#EDF1F7", color: "#535665" }}
          className="flex flex-col py-10 px-20 text-xl font-semibold"
        >
          <div className="py-5">Orders</div>
          <div className="py-5">Swiggy One</div>
          <div className="py-5">Favourites</div>
          <div className="py-5">Payments</div>
          <div className="py-5">Address</div>
          <div className="py-5">Settings</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;
