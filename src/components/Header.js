import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { handleGptSearchToggleView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";
import { lang } from "../utils/langConstant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const langKey = useSelector(store => store.config.lang);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  const handleGptSearchToggle = () => {
    dispatch(handleGptSearchToggleView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Id User is signed in/sign up, this portion called, see docs for a list of available properties
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen absolute px-8 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {userState && <div className="flex py-2">
        {
          showGptSearch && <select className="p-2 m-2 bg-gray-600 text-white rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        <button
          onClick={handleGptSearchToggle}
          className="w-18 h-10 p-2 m-2 border border-black bg-green-500 font-bold text-white rounded-lg"
        >
          {showGptSearch? lang[langKey].homepage : 'GPT Search'}
        </button>
        <img
          className="w-12 h-12"
          src={userState?.photoURL}
          alt="profile-icon"
        />
        <button
          onClick={onSignOut}
          className="w-18 h-10 p-2 m-2 border border-black bg-red-500 font-bold text-white rounded-lg"
        >
          {showGptSearch ? lang[langKey].signout : 'Sign Out'}
        </button>
      </div>
        }   
    </div>
  );
};

export default Header;
