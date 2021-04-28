import React from "react";
import styles from "../styles/Navbar.module.css";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return user != null ? (
    <div className={styles.nav}>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  ) : null;
};

export default Navbar;
