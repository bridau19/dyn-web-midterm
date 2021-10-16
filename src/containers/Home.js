import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';


function Home() {
    const [position, setPosition] = useState([]);

    const URL = `http://api.open-notify.org/iss-now.json`;
    
    
    useEffect(() => {
        if (position) {
            axios
            .get(URL)
            .then(response => {
                const lat = response.data.iss_position.latitude;
                const lon = response.data.iss_position.longitude;
                setPosition([lat, lon]);
            })
            .catch(function(error) {
                console.warn(error);
            });
        }
    }, [URL, position]);

    // const positions = position.map(x => <p>{x}</p>);
    console.log("position: ", position);

    const lat = position[0];
    const lon = position[1];
    return (
        <div>
            <h1>ISS Current Location</h1>
            <p>{lat}, {lon}</p>
        </div>
    );
}

export default Home;