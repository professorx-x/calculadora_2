import React from 'react';

import ButtonCalc from './buttons_calc';

import '../css/group_botton.css';

const bots = () => 
{
    return <div className="group_botton"> 
        <ButtonCalc carac="7" tipo="num"/>
        <ButtonCalc carac="8" tipo="num"/>
        <ButtonCalc carac="9" tipo="num"/>
        <ButtonCalc carac="+" tipo="opera"/>

        <ButtonCalc carac="4" tipo="num"/>
        <ButtonCalc carac="5" tipo="num"/>
        <ButtonCalc carac="6" tipo="num"/>
        <ButtonCalc carac="-" tipo="opera"/>

        <ButtonCalc carac="3" tipo="num"/>
        <ButtonCalc carac="2" tipo="num"/>
        <ButtonCalc carac="1" tipo="num"/>
        <ButtonCalc carac="*" tipo="opera"/>

        <ButtonCalc carac="0" tipo="num"/>
        <ButtonCalc carac="=" tipo="carac"/>
        <ButtonCalc carac="AC" tipo="carac"/>
        <ButtonCalc carac="/" tipo="opera"/>
        
    </div>;
}

export default bots;
