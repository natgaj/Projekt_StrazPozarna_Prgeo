import React from 'react'

import './Home.css'
import zdjecie from './PSPlogo.png'
import zdjecie1 from "./straż1.jpg";
import zdjecie2 from "./straż2.jpg";
import zdjecie3 from "./straż3.jpg";
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='home_main' >
            <div className='home_top'>
                <Link to={"about"}>
                    <button className='home_about'>O projekcie </button>
                </Link>
            </div>
            <div className='home_bottom'>
                <div className='home_left'>
                    <img className="services_logo" src={zdjecie1} alt="logo1" />{" "}
                    <img className="services_logo" src={zdjecie2} alt="logo2" />
                    <img className="services_logo" src={zdjecie3} alt="logo3" />{" "}
                </div>

                <div className='home_right'>
                    <h1 className='home_title'>STRAŻ POŻARNA W WARSZAWIE  </h1>
                    <div className='subtitle_title'>Strona internetowa z interaktywną mapą  </div>
                    <Link to="services">
                        <button className='home_button'>START!</button>
                    </Link>
                </div>
                <img className='home_logo' src={zdjecie} alt='logo' />
            </div >
        </div >
    )
}

export default Home