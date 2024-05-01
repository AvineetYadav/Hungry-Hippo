import { useState, useRef, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { checkValiDate } from "../utils/valid"; // Corrected import name

const LogIn = () => {
  const [logIn, setLogIn] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null); // Renamed references
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate(`/loginPage`);
      } else {
        navigate(`/login`);
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleButtonClick = () => {
    const message = checkValiDate(emailRef.current.value, passwordRef.current.value); // Corrected function name
    if (message) {
      setError(message);
      return;
    }

    if (!logIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameRef.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // handle user sign in
        })
        .catch((error) => {
          setError(error.message); // Set error message
        });
    }
  };

  const toggle = () => {
    setLogIn(!logIn);
    setError(null);
  };

  return (
    <div className="w-1/3 mx-auto my-16">
      <form onSubmit={(e) => e.preventDefault()}>
        {!logIn && (
          <input
            className="w-full border border-gray-400 p-3 mb-4"
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
        )}
        <input
          className="w-full border border-gray-400 p-3 mb-4"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className="w-full border border-gray-400 p-3 mb-4"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {error && <p className="text-red-500 p-1">{error}</p>}
        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-orange-400 text-white w-full p-3"
        >
          {logIn ? `Sign In` : `Sign Up`}
        </button>
        <p className="mt-3 cursor-pointer w-1/3" onClick={toggle}>
          {logIn ? `create an account` : `login to your account`}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
