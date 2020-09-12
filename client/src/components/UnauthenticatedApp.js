import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGIN } from "../context/actions";
import axios from "axios";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import { useHistory } from "react-router-dom";
const UnauthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();
  const [signedUp, setSignedUp] = useState(true);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();

  const doLogin = async () => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    localStorage.setItem("authUser", JSON.stringify(data));
    console.log(data);
    dispatch({
      type: LOGIN,
      user: data,
    });
  };

  const doSignup = async () => {

    const { data } = await axios.post("/auth/register", {
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value,
    });
    localStorage.setItem("authUser", JSON.stringify(data));
    console.log(data);
    // dispatch({
    //   type: LOGIN,
    //   user: data
    // })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
    setSignedUp(!signedUp);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setSignedUp(!signedUp);
  };
  return (
    <div>
      {signedUp ? (
        <SignInCard
          header="Sign In"
          handle={handleSubmit}
          emailRef={emailRef}
          passwordRef={passwordRef}
          handleToggle={handleToggle}
        />
      ) : (
        <SignUpCard
          header="Sign Up"
          handle={handleSignup}
          regEmailRef={regEmailRef}
          regPasswordRef={regPasswordRef}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default UnauthenticatedApp;
