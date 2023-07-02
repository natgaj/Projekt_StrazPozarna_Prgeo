import React from 'react';
import './About.css';
import zdjecie from './PSPlogo.png';
import zdjecie2 from './WATlogo.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about_main'>
            <div className='about_top'>

                <h1 className='about_title'>O projekcie</h1>

                <div className='aboutprojekt_tekst'>
                    <p>
                        Projekt wyświetla budynki jednostek ratowniczo-gaśniczych (JRG - Jednostki Ratowniczo-Gaśnicze) w obszarze Warszawy.
                        Celem projektu jest udostępnienie użytkownikom informacji o lokalizacji tych jednostek oraz podstawowych danych kontaktowych.
                    </p>
                    <p>Główne funkcje projektu obejmują:</p>
                    <ul>
                        <li>Wyświetlanie mapy z możliwością zoomowania i przesuwania.</li>
                        <li>Wczytywanie danych geograficznych dotyczących budynków JRG z serwera.</li>
                        <li>Wyświetlanie budynków JRG na mapie w postaci warstwy.</li>
                        <li>Dodawanie interaktywnych popupów z informacjami o jednostkach JRG po kliknięciu na budynki.</li>
                        <li>Możliwość wyboru różnych warstw mapowych, takich jak OSM, WMS Google Satellite, WMS Open Topo Map.</li>
                        <li>Dostosowanie ikony dla punktów reprezentujących budynki JRG.</li>
                    </ul>
                    <p>
                        Projekt ma na celu zapewnienie użytkownikom łatwego dostępu do informacji o lokalizacji i danych kontaktowych jednostek ratowniczo-gaśniczych,
                        co może być szczególnie przydatne w sytuacjach awaryjnych i związanych z bezpieczeństwem.
                        Interaktywna mapa pozwala użytkownikom na wygodne eksplorowanie obszaru i uzyskiwanie potrzebnych informacji na temat poszczególnych jednostek JRG.
                    </p>
                </div>
                <img className='aboutpsp_logo' src={zdjecie} alt='logo' />
            </div>

            <div className='about_bottom'>
                <div className='aboutwykonawca_tekst'>
                    <p>Wykonawca: Wojskowa Akademia Techniczna</p>
                    <p>Wydział: Inżynierii Lądowej i Geodezji</p>
                    <p>Autor: st. szer. pchor. Natalia GAJEWSKA</p>
                    <p>Grupa: WIG19GG1S0</p>
                    <p>Przedmiot: Programowanie Geoportali</p>
                    <p>Data utworzenia: 02.07.2023r.</p>
                </div>
                <img className='aboutwat_logo' src={zdjecie2} alt='logo2' />
                <Link to='../'>
                    <button className='home_about'>STRONA GŁÓWNA</button>
                </Link>
            </div>
        </div>
    );
}

export default About;
