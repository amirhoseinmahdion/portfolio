import React, { useState } from 'react';
import Mypage from './Mypage';
import styled from "styled-components"

const Div = styled.div`

width: 3rem;
height:3rem;
position:fixed;
top:20px;
right:30px;

z-index:30;
display:none;
 @media(max-width : 768px){
    display:flex;
    justify-content:space-around;
    flex-direction:column
    
  
 }
 @media(max-width : 500px){
    display:flex;
    justify-content:space-around;
    flex-direction:column;
   
  
    
 }



 div{
    width: 2rem;
    height:0.25rem;
    background:white;
    border-radius:10px;
    transform-origin:-7px;
    transition:all 0.3s ease-in-out;
    &:nth-child(1){
        transform:${props => props.open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2){
        transform:${props => props.open ? "translateX(-100%)" : "translateX(0)"};
       opacity:${props => props.open ? "0" : "1"};
    }
    &:nth-child(3){
        transform:${props => props.open ? "rotate(-45deg)" : "rotate(0)"};
    }
 }

`

const Burger = () => {
    const [open , setOpen] = useState(false)
    const handleopen = () => {
        setOpen(!open)

    }
    return (
        <>
        <Div open={open} onClick={handleopen}>
            <div></div>
            <div></div>
            <div></div>
        </Div>
        <Mypage open={open}/>
        </>
    );
};

export default Burger;