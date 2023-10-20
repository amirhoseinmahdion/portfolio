import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./page.module.css"


const Startpage = () => {
    return (
        
        <div className={styles.main}>
            <h2 className={styles.text}>
            Hi wellcome to
           my page
           </h2>
           <div className={styles.visit}>
            <h3>Would you like to visit my page?
            </h3>
            <div className={styles.btn}>
            <Link className={styles.notclick} to="/mypage">Wait a few moments</Link>
            <Link className={styles.clickme} to="/amirhoseinmahdion" >yes sure</Link>
          
            </div>
           </div>
        </div>
    );
};

export default Startpage;