import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userState = useSelector(store => store.user);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userState && <div className="flex py-2">
        <img
          className="w-12 h-12"
          src={userState?.photoURL}
          alt="profile-icon"
        />
        <button
          onClick={onSignOut}
          className="w-18 h-10 p-2 m-2 border border-black bg-red-500 font-bold text-white rounded-lg"
        >
          Sign Out
        </button>
      </div>
        }   
    </div>
  );
};

export default Header;
