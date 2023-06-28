import React from 'react';
import "./About.css";
import zdjecie from "./PSPlogo.png";
import zdjecie2 from "./WATlogo.png";
import { Link } from 'react-router-dom'

function About() {


    return (
        <div className='about_main' >
            <div className='about_top' >
                <h1 className='about_title' > O projekcie</h1>
                <div className='aboutprojekt_tekst' >
                    tutaj będzie napis o czym jest projekt, co przedstawia
                </div>
                <img className='aboutpsp_logo' src={zdjecie} alt='logo' />
            </div>

            <div className='about_bottom' >
                <div className='aboutwykonawca_tekst' >
                    tutaj będzie napis o wykonawcy
                </div>
                <img className='aboutwat_logo' src={zdjecie2} alt='logo2' />
                <Link to={"../"}>
                    <button className='home_about'>STRONA GŁOWNA </button>
                </Link>
            </div>
        </div>
    );
}

export default About;