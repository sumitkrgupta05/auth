import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function SignIn() {
  const [value, setValue] = useState("");
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  },[]);

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleclick}>SignIn With Google </button>
      )}
    </div>
  );
}

export default SignIn;
