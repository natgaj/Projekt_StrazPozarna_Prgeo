import React from "react";
import { Link } from "react-router-dom";

import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import "./Services.css"


function Services() {
    return (
        <div className="services_main">
            <div className="services_top">
                <h1 className="services_title">DOSTĘPNE USŁUGI</h1>
            </div>
            <div className="services_gallery"> </div>
            <img className="services_image" src={"https://www.gov.pl/photo/f16cb797-9058-43e0-b148-04693ef4ba88"} alt="logo1" />
            <img className="services_image" src={"https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/295989137_361084596201572_6828425044756554592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iqmG8phc0WMAX9lhSit&_nc_oc=AQnw9AiS-Isb7L149OYLpl2WB_1uhEfvcC1APoJ61nQG4_gdpAhszODb24xVMepPUo8&_nc_ht=scontent-fra3-1.xx&oh=00_AfDprPCmumtSj3YNtnyQ5kfv4qrOCAS21pY9byIL73xz8Q&oe=64A5FE30"} alt="logo2" />
            <img className="services_image" src={"https://www.gov.pl/photo/3b2eee4a-4b44-4b76-b95b-fe3f171c7113"} alt="logo3" />
            <img className="services_image" src={"https://www.gov.pl/photo/format/500d4aca-3b24-41d0-a57e-9eb4fd00db48/resolution/729x308"} alt="logo4" />
            <img className="services_image" src={"https://www.gov.pl/photo/4145daeb-f01b-4865-bebe-0b8f19e29e8c"} alt="logo5" />
            <img className="services_image" src={"https://static.myvimu.com/photo/56/122705623.jpg"} alt="logo6" />
            <div className="services_bottom">
                <div className="services_left">
                    <Link to="map">
                        <button className="services_button"><MapIcon /> Mapa</button>
                    </Link>

                    <Link to="bazabsp">
                        <button className="services_button"><ListIcon /> Baza BSP</button>
                    </Link>

                    <Link to="../">
                        <button className="home_about">STRONA GŁÓWNA</button>
                    </Link>
                </div>
                <div className="services_footer"></div>
            </div>
        </div>
    );
}

export default Services;
