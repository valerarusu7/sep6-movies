import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { Avatar } from "@material-ui/core";
import { signOut } from "../store/reducers/authReducer";

const Navbar = ({}) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  return user != null ? (
    <div className={styles.nav}>
      Navbar <button onClick={() => router.push("/movie")}>movie</button>
      <div>email: {user.email}</div>
      <div>name: {user.displayName}</div>
      <div>id: {user.uid}</div>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </div>
  ) : null;
};

export default Navbar;
