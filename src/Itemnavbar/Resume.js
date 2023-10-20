import React from 'react';
import { useHistory } from 'react-router-dom';
import Burger from '../component/Burger';

import styles from "./rsume.module.css"


const Resume = () => {
    const history = useHistory()
    const handlebackchnage = () => {
history.push("/amirhoseinmahdion")
    }
    return (
        <div>
            <Burger/>
            <div className={styles.resume}>
            <h3>I am a front-end developer
                <br/>
1-Good mastery in <span>html</span> and <span>css</span>
<br/>
2-Good mastery in <span>javascript</span>
<br/>
3-I have a good command of the <span>react js</span>  library
<br/>
4-I know completely <span>Next js</span> 
<br/>
5-Good mastery in <span>redux(toolkit)</span>
<br/>
6-I am familiar with <span>git</span> and <span>sass</span>
<br/>
7-Good mastery in <span>media query</span>
<br/>
8-Good mastery in <span>ES6</span>
<br/>
9-I am familiar with <span>graphQl</span> 

<br/>
10-Good mastery in <span>restfull api</span>
<br/>
11-I am familiar with the  <span>Mui and tailwind</span>
<br/>
12-Good mastery in <span>Typescript</span>
</h3>
<button onClick={handlebackchnage}>back to home</button>
</div>
        </div>
    );
};

export default Resume;