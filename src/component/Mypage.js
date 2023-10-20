import React from 'react';
import styles from "./myp.module.css"
import { AiOutlineUser , AiOutlineMail ,AiOutlineBank , AiOutlineFile , AiFillInstagram ,AiFillPhone ,AiFillGithub} from "react-icons/ai";
import person from "../img/IMG_5420.JPG"
import { Link} from 'react-router-dom';
import styled from "styled-components"
const UL = styled.ul`
@media(max-width:768px){
    transform : ${props => props.open ? "translateX(0)" : "translateX(200%)"};
    transition:all 0.5s ease-in-out;
    li{
        margin-right:150px
    }
}


`




const Mypage = ({open}) => {
   
    return (
        <div className={styles.background}>
          
                <div className={styles.navbar}>
                    <div className={styles.images}>
                       
                    <img className={styles.img} src={person} alt="person"/>
                    <p>Amirhosein mahdion</p>
            
                    </div>
            
                    
                    <div className={styles.link}>
                   
                    <UL open={open}>
             
                        <li><AiOutlineFile/><Link className={styles.tolink} to="/amirhoseinmahdion/resume"> resume</Link></li>
                        <li><AiOutlineMail/><Link className={styles.tolink} to="/amirhoseinmahdion/contac">contac</Link> </li>
                        <li><AiOutlineUser/><Link className={styles.tolink} to="/amirhoseinmahdion/about"> about</Link> </li>
                        <li> <AiOutlineBank/><Link className={styles.tolink} to="/mypage">home</Link></li>
                    </UL>
                    </div>
                    <div className={styles.icons}>
              <a href="https://www.instagram.com/amirhoseinmahdion">    <AiFillInstagram className={styles.contac}/></a> 
              <Link to="/amirhoseinmahdion/contac">      <AiFillPhone className={styles.contac}/></Link>  
              <a href="https://github.com/amirhoseinmahdion">    <AiFillGithub  className={styles.contac}/></a> 
            
                   </div>
                   
            </div>
            
        </div>
    );
};

export default Mypage;