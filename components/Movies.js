import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/reducers/authReducer";

const Movies = ({}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <div>email: {user.email}</div>
      <div>name: {user.displayName}</div>
      <div>id: {user.uid}</div>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </div>
  );
};

export default Movies;
