import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import withAuthentication from "../hoc/withAuthentication";
import { signIn } from "../store/reducers/authReducer";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Login">
      <button onClick={() => dispatch(signIn())}>Login</button>
    </div>
  );
};

export default Auth;
