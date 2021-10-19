import React from "react";

function LaunchCard({launch}) {
    return (
        <div className="LaunchCardWrapper">
            <div className="LaunchCardImage">
                {launch.image && <img src={launch.image} alt="launch" />}
            </div>
            <div className="LaunchCardText">
                <h2 className="LaunchCardTitle">{launch.mission.name}</h2>
                <p className="LaunchCardDate">{launch.window_start}</p>
                <p className="LaunchCardDate">{launch.launch_service_provider.name}</p>
                <p className="LaunchCardDate">{launch.mission.description}</p>
            </div>
        </div>
    );
} 

export default LaunchCard;