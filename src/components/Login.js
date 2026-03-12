import { useState } from "react";
import Header from "./Header";

const Login = () => {
  
  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="logo"
        />
      </div>

       <form className="absolute p-12 w-4/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name.." className="m-2 p-2 rounded-md w-full bg-gray-700"></input>}
            <input type="text" placeholder="Email Address.." className="m-2 p-2 rounded-md w-full bg-gray-700"></input>
            <input type="password" placeholder="Password" className="m-2 p-2 rounded-md w-full bg-gray-700"></input>
            <button type="submit" className="m-2 p-2 bg-red-700 rounded-lg w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <h2 className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</h2>
       </form>
    </div>
  );
};

export default Login;
