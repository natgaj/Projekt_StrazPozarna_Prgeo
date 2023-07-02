import React, { useEffect, useState } from 'react'
import './Map.css'
import { MapContainer, TileLayer, LayersControl, WMSTileLayer, GeoJSON, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


import MarkerPlacement from './MarkerPlacement';
import axios from 'axios';
import { fireIcon } from './Icon';

function Map() {
    const [jgrbudynki, setJgrbudynki] = useState()
    const makePopup = (feature, layer) => {
        if (feature) {
            layer.bindPopup(
                `<h1>${feature.properties.JRG}</h1>
                Specjalizacja: ${feature.properties.specjaliza}
                <p> Dowódca JRG: ${feature.properties.dowodcaJRG} </p>
                <p> Zastępca Dowódcy JRG: ${feature.properties.zastepcado} </p>
                <p> Adres: ul. ${feature.properties.ulica}, ${feature.properties.kodpocztow} ${feature.properties.miasto}</p>
                <p> Telefon: ${feature.properties.telefon} </p>
                <p> Email: ${feature.properties.email} </p>
            `
            )
        }


    }

    useEffect(() => {

        const getData = () => {
            axios
                .get(`http://localhost:8080/geoserver/prgeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prgeo%3Ajgrbudynki&maxFeatures=50&outputFormat=application%2Fjson`) // tutaj uważać na link
                .then(
                    (dane) => {
                        console.log(dane.data);
                        setJgrbudynki(dane.data)

                    })
                .catch(
                    (error) => {
                        console.log(error);
                        return null;
                    })
        }
        getData();

    }, [])

    return (
        <div className='map_main'>
            <MapContainer
                center={[52.232222, 21.008333]}
                zoom={12}
            >

                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name='OSM' >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='WMS google Satelite' >
                        <TileLayer
                            url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='WMS open topo map' >
                        <TileLayer
                            url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay name='Budynki JRG'>
                        {jgrbudynki ? (
                            <GeoJSON
                                data={jgrbudynki}
                                onEachFeature={makePopup}
                                pointToLayer={(feature, latlng) => {
                                    return L.marker(latlng, { icon: fireIcon });
                                }}
                            />
                        ) : (
                            ""
                        )}
                    </LayersControl.Overlay>


                </LayersControl>



            </MapContainer>

        </div>
    )
}

export default Map