import React from "react";

function ApodCard({apod}) {
    const newDate = new Date(apod.date);
    const dateString = newDate.toString();

    return (
        <div className="ApodCardWrapper"> 
            <h2 className="ApodCardTitle">Astronomy Picture of the Day</h2>

            <div className="ApodCardBody">         
                <div className="ApodCardImage">
                    < img src={apod.url} alt={apod.title} />
                </div>
                <div className="ApodCardText">
                    <p className="ApodCardSubtext">Copyright: {apod.copyright}</p>
                    <p className="ApodCardSubtext"> {dateString} </p>
                    <p className="ApodCardSubtext"> Description: {apod.explanation}</p>
                </div>
            </div>
        </div>
    );
} 

export default ApodCard;