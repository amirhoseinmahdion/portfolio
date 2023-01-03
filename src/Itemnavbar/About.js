import React from 'react';
import { useHistory } from "react-router-dom";
import Burger from '../component/Burger';

import styles from "./aboutme.module.css"

const About = () => {
    let history = useHistory();
    const handlecomechange = () => {
        history.push("/amirhoseinmahdion")
    }
    return (
        <div>
            <Burger/>
            <div className={styles.main}>
            <h3>Hello, my name is Amirhossein Mahdiyun
Born in April 1380, I was born in Tehran and I live here
My university major is computer engineering and I have a bachelor's degree in computer science and I have decided to continue until my master's degree
In the beginning, I was not interested in programming, but over time I became interested and I decided to become a good programmer.
I am currently studying at University But I got my bachelor's degree in another semester.
I work in the field of front-end programming and I have decided to become a full stacker.
I got to know the programmer through educational videos on different sites and channels.
Currently, I do not have a resume and I am an apprentice, but I have a strong team work spirit in completing projects and I will do my best to be able to be employed in a place that is conducive to my development.
I have samples of work that you can visit for free by clicking on<a href='https://github.com/amirhoseinmahdion'>GitHub</a>  to get to know me better


</h3>
<button onClick={handlecomechange}>back to home</button>
</div>
        </div>
    );
};

export default About;