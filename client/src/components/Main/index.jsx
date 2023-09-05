import React from "react";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.centered}>
        <button className={styles.green_btn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Main;
