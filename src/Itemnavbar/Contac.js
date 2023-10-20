import React from 'react';
import { useHistory } from 'react-router-dom';
import Burger from '../component/Burger';

import styles from './contacts.module.css'


const Contac = () => {
    const history = useHistory()
    const handlebackchange = () => {
history.push("/amirhoseinmahdion")
    }
    return (
        <div className={styles.contac}>
            <Burger/>
            
            <h3>There are ways to contact me through <span>email</span>, <span>WhatsApp</span> and <span>instagram</span>
And you can contact me whenever you like</h3>
<div>
    <h4>my emile : mahdionamirhosein@gmail.com</h4>
    <h4>my phone number: 09397009636</h4>
    <h4>my instagram : <a href='https://instagram.com/amirmahdiion'> amirhoseinmahdion </a></h4>
    <h4>my github :<a href='https://github.com/amirhoseinmahdion'> amirhoseinmahdion </a></h4>
</div>

<button onClick={handlebackchange}>back to home</button>
        </div>
    );
};

export default Contac;