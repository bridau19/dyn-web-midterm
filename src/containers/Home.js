import React, { useEffect, useState } from 'react';
import LaunchCard from './../components/LaunchCard';
import axios from 'axios';


function Home() {
    const [position, setPosition] = useState([]);
    const [launchData, setLaunchData] = useState();

    const ISS_URL = `http://api.open-notify.org/iss-now.json`;
    const LAUNCH_URL = `https://ll.thespacedevs.com/2.2.0/launch/upcoming/`;
    
    
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

    useEffect(() => { // get launch info
        if (!launchData) {
            axios
            .get(LAUNCH_URL)
            .then(response => {
                setLaunchData(response.data);
            })
            .catch(function(error) {
                console.warn(error);
            });
        }
    }, [LAUNCH_URL, launchData]);

    // dev console logs - delete later
    // console.log(launchData["results"]);

    return (
        <main>
            <h1>ISS Current Location</h1>
            <p>{lat}, {lon}</p>

            {launchData && launchData['results'].map((launch, i) => (
                <LaunchCard launch={launch} key={i}/>
            ))}
        </main>
    );
}

export default Home;