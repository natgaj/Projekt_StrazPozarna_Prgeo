import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";


import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';

function Services() {
    return (
        <div className="services_main">
            <div className="services_top">
                <h1 className="services_title">DOSTĘPNE USŁUGI </h1>
            </div>
            <div className="services_bottom">
                <div className="services_left">
                    <Link to="map">
                        <button className="services_button">Mapa </button>
                    </Link>

                    <Link to="bazabsp">
                        <Button className="services_button"><ListIcon />Baza BSP </Button>
                    </Link>

                    <Link to="weather">
                        <button className="services_button"> Poka Poka Pogodę </button>
                    </Link>

                </div>


            </div>
        </div>
    );
}

export default Services;