import React, {useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGIN } from "../context/actions";
import axios from "axios";
import SignInCard from "./SignInCard"
import SignUpCard from "./SignUpCard"

const UnauthenticatedApp = () => {
  const [state,dispatch] = useGlobalContext();
  const [signedUp, setSignedUp] = useState(true)

  const emailRef = useRef();
  const passwordRef = useRef();
  const regEmailRef = useRef();
  const regPasswordRef = useRef();

  const doLogin = async() => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
    console.log(data);
    dispatch({
      type: LOGIN,
      user: data
    })
  }

  const doSignup = async() => {
    const { data } = await axios.post("/auth/register", {
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value
    });

    console.log(data);
    // dispatch({
    //   type: LOGIN,
    //   user: data
    // })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
  }

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setSignedUp(false);
  }
  return (
    <div>
      {/* <p>Please enter your information to login:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="text" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
      <p>Please enter your information to signup:</p>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="email" ref={regEmailRef} />
        <input type="text" placeholder="password" ref={regPasswordRef} />
        <button type="submit">Submit</button>
      </form> */}
      { signedUp ? 
      (<SignInCard header="Sign In" handle={handleSubmit} emailRef={emailRef} passwordRef={passwordRef} handleRegister={handleRegister}/>) 
      :
      (<SignUpCard header="Sign Up" handle={handleSignup} regEmailRef={regEmailRef} regPasswordRef={regPasswordRef}/>)}
    
    </div>
  )
}

export default UnauthenticatedApp;