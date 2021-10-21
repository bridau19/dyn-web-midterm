import React from "react";

function ApodCard({apod}) {
    const newDate = new Date(apod.date); 
    // console.log("from api: ", apod.date);
    // console.log("object Date: ", newDate);
    const dateString = newDate.toString();
    // console.log("dateString: ", dateString);

    return (
        <div className="ApodCardWrapper">          
            <div className="ApodCardImage">
                < img src={apod.url} alt={apod.title} />
            </div>
            <div className="LaunchCardText">
                <h2 className="ApodCardTitle">Astronomy Picture of the Day</h2>
                <p className="ApodCardSubtext">Copyright: {apod.copyright}, date: {dateString}</p>
                <p className="ApodCardSubtext">{apod.explanation}</p> 
            </div>
        </div>
    );
} 

export default ApodCard;