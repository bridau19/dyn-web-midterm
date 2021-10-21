import React, { useEffect, useState } from 'react';
import LaunchCard from './../components/LaunchCard';
import axios from 'axios';
import ApodCard from './../components/ApodCard';


function Home() {
    const [position, setPosition] = useState([]);
    const [launchData, setLaunchData] = useState();
    const [apod, setApod] = useState();

    const ISS_URL = `http://api.open-notify.org/iss-now.json`;
    const LAUNCH_URL = `https://ll.thespacedevs.com/2.2.0/launch/upcoming/`;
    const APOD_TEST = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
    
    
    useEffect(() => { // get ISS positions
        if (position) {
            axios
            .get(ISS_URL)
            .then(response => {
                const lat = response.data.iss_position.latitude;
                const lon = response.data.iss_position.longitude;
                setPosition([lat, lon]);
            })
            .catch(function(error) {
                console.warn(error);
            });
        }
    }, [ISS_URL]);

    const lat = position[0];
    const lon = position[1];

    // useEffect(() => { // get launch info
    //     if (!launchData) {
    //         axios
    //         .get(LAUNCH_URL)
    //         .then(response => {
    //             setLaunchData(response.data);
    //         })
    //         .catch(function(error) {
    //             console.warn(error);
    //         });
    //     }
    // }, [LAUNCH_URL, launchData]);

    useEffect(() => { // get launch info
        if (!apod) {
            axios
            .get(APOD_TEST)
            .then(response => {
                setApod(response.data);
            })
            .catch(function(error) {
                console.warn(error);
            });
        }
    }, [APOD_TEST, apod]);

    console.log(apod);

    return (
        <main>
            <h1>SpacedOut</h1>

            <h2>ISS Current Location</h2>
            <p>{lat}, {lon}</p>

            {apod && <ApodCard apod={apod} />}
            
            {launchData && launchData['results'].map((launch, i) => (
                <LaunchCard launch={launch} key={i}/>
            ))}
        </main>
    );
}

export default Home;