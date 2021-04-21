import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Login">
      <button onClick={() => dispatch(signIn())}>Login</button>
    </div>
  );
};

export default Login;
