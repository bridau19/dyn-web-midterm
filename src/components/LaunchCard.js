import React from "react";

function LaunchCard({launch}) {
    const newDate = new Date(launch.window_start); 
    const dateString = newDate.toString();
    return (
        <div className="LaunchCardWrapper">
            <div className="LaunchCardImage">
                {launch.image && <img src={launch.image} alt="launch" />}
            </div>
            <div className="LaunchCardText">
                <h2 className="LaunchCardTitle">{launch.mission.name}</h2>
                <p className="LaunchCardDate">{dateString}</p>
                <p className="LaunchCardDate">Launch Service Provider: {launch.launch_service_provider.name}</p>
                <p className="LaunchCardDate">Mission Description: {launch.mission.description}</p>
            </div>
        </div>
    );
} 

export default LaunchCard;