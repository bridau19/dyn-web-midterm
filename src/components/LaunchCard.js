import React from "react";

function LaunchCard({launch}) {
    const newDate = new Date(launch.window_start); 
    const dateString = newDate.toString();
    return (
        <div className="LaunchCardWrapper">
            <h2 className="LaunchCardTitle">{launch.name}</h2>
            <div className="LaunchCardBody"> 
                <div className="LaunchCardImage">
                    {launch.image && <img src={launch.image} alt="launch" />}
                </div>
                <div className="LaunchCardText">
                    <p>Launch Service Provider: {launch ? launch.launch_service_provider.name: ''}</p>
                    <p className="LaunchCardDate">{dateString}</p>
                    <p>Mission Description: {launch.mission ? launch.mission.description: ''}</p>
                </div>
            </div>
        </div>
    );
} 

export default LaunchCard;