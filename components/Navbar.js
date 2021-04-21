import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = ({}) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  return user != null ? (
    <div className={styles.nav}>
      Navbar <button onClick={() => router.push("/movie")}>movie</button>
    </div>
  ) : null;
};

export default Navbar;
