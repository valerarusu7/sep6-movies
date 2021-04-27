import React, { useEffect } from "react";
import { auth, provider } from "../firebase/firebase";
import Head from "next/head";

const Login = () => {
  useEffect(() => {}, []);

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default Login;
