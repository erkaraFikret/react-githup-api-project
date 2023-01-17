import React from "react";
import { Link } from "react-router-dom";
import './event.css'
import { format } from 'timeago.js';


const Events = ({ events }) => {
    return (
        <>
            {events?.map((ev, i) => (
                <div key={i} className="event-container">
                    <Link to={`/${ev.actor?.login}`}>
                        <img src={ev.actor?.avatar_url} className="event-img" />
                    </Link>
                    <h1 className="event-title">
                        {ev?.actor?.login} {ev?.type}
                        <br />
                        {ev?.repo?.name}
                        <br />
                        {format(ev.created_at)}
                    </h1>
                </div>
            ))}
        </>
    );
};

export default Events;