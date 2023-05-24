import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faAt,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import styles from './contact.module.css';
import mapPin from '../../../assets/map-pin-soild.png';

function Contact() {
    const getIcon = () => {
        return L.icon({
            iconUrl: mapPin,
            iconSize: [30, 50],
        });
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.mapContainer}>
                    <MapContainer
                        center={[52.535995, 13.351101]}
                        zoom={15}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                        />

                        <Marker
                            position={[52.536595, 13.351101]}
                            icon={getIcon()}
                        >
                            <Popup>
                                <span
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#36454f',
                                        fontWeight: 200,
                                    }}
                                >
                                    We are here 👋
                                </span>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className={styles.contactInformation}>
                    <h3 style={{ marginLeft: '4rem' }}>
                        You can contact us here:
                    </h3>
                    <ul>
                        <li className={styles.listItem}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faPhone}
                            />
                            <span>+49 240145</span>
                        </li>
                        <li className={styles.listItem}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faAt}
                            />
                            <span>elenano555@gmail.com</span>
                        </li>
                        <li className={styles.listItem}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faLocationDot}
                            />
                            <span>Ellen-Epstein Str. 21233, 10559 Berlin</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Contact;
