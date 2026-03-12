import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth, provider } from "../utils/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const handleButtonClick = () => {
    // Validata Form Data
    const validationMsg = checkValidData(
      emailRef?.current?.value,
      pwdRef?.current?.value,
      nameRef?.current?.value,
    );
    setErrorMessage(validationMsg);
    if (validationMsg) return;

    if (!isSignInForm) {
      // Sign Up Logic

      // Below is the code for authenticate user(Sign-up) by Email/Password Sign-In Method
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        pwdRef?.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: "https://img.freepik.com/premium-photo/cute-anime-boy-wallpaper_776894-110627.jpg?semt=ais_rp_progressive&w=740&q=80",
          })
            .then(() => {
              // Profile updated!
             const {uid, email, displayName, photoURL} = auth.currentUser;
             dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

      // Below is the code for authenticate user(Sign-up) by Google Sign-In Method
      // signInWithPopup(auth, provider)
      //     .then((result) => {
      //         // This gives you a Google Access Token. You can use it to access the Google API.
      //         const credential = GoogleAuthProvider.credentialFromResult(result);
      //         const token = credential.accessToken;
      //         // The signed-in user info.
      //         const user = result.user;
      //         console.log('user', user)
      //         // IdP data available using getAdditionalUserInfo(result)
      //         // ...
      //     }).catch((error) => {
      //         // Handle Errors here.
      //         const errorCode = error.code;
      //         const errorMessage = error.message;
      //         // The email of the user's account used.
      //         setErrorMessage(errorCode + "-" + errorMessage)
      //         const email = error.customData.email;
      //         // The AuthCredential type that was used.
      //         const credential = GoogleAuthProvider.credentialFromError(error);
      //         // ...
      //     });
    } else {
      // Sign In Logic

      // Below is the code for sign-in user by Email/Password Sign-In Method
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        pwdRef?.current?.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user signed In Successfully", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-4/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name.."
            className="m-2 p-2 rounded-md w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address.."
          className="m-2 p-2 rounded-md w-full bg-gray-700"
        ></input>
        <input
          ref={pwdRef}
          type="password"
          placeholder="Password"
          className="m-2 p-2 rounded-md w-full bg-gray-700"
        ></input>
        <p className="text-red-500 text-sm p-2">{errorMessage}</p>
        <button
          type="submit"
          className="m-2 p-2 bg-red-700 rounded-lg w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </h2>
      </form>
    </div>
  );
};

export default Login;
