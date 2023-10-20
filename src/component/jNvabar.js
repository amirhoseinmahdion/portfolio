import React from "react";

import styles from "./jnav.module.css";
import Burger from "./Burger";

const jNvabar = () => {
  return (
    <div>
      <Burger />

      {/* <div className={styles.main}>
                <div className={styles.text}>
                                <p>Hi I am </p>
                                <h1>amirhosein mahdion</h1>
                                <div>Im developer</div>
                </div>
                
            </div> */}
      <div className={styles.main}>
        <div className={styles.flex}>
          <div className={styles.box1}>
            <h1>designer</h1>
            <p>
              UI/UX designer with a passion for designing beautiful and
              functional user experiences
            </p>
          </div>
          <div className={styles.box1}>
            <h1>coder</h1>
            <p>
              front End Developer who focuces on writing clean,elegant and
              efficient code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jNvabar;
