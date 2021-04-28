import React from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const signOut = () => {
    auth.signOut();
  };

  return user != null ? (
    <div className={styles.nav}>
      <button onClick={() => router.push("/movie")}>movie</button>
      <div>email: {user.email}</div>
      <div>name: {user.displayName}</div>
      <div>id: {user.uid}</div>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  ) : null;
};

export default Navbar;
