import React from 'react'
import { Link } from 'react-router-dom';

import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} alt="arrow btn" className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Nikita</span>👋
            <br />
            Beginner react developer
        </h1>
    ),
    2: (
        <InfoBox
            text='I have a lot of theoretical skills, and I am ready to bring them into practice'
            link='/about'
            btnText='Learn more' />
    ),
    3: (
        <InfoBox
            text='Gaining practical skills in programming projects on React, repeated/passed through the guides more than one project.'
            link='/projects'
            btnText='Visit my portfolio' />
    ),
    4: (
        <InfoBox
            text='Are you ready to hire a beginner developer who puts his heart and soul into the business?'
            link='/contact'
            btnText='Contact me' />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || nul;
}

export default HomeInfo