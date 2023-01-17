import React from 'react'
import './tabs.css'

function Tabs({type, setType}) {
    return (
        <div>
            <button onClick={() => setType("repos")} className={`${type === "repos" && "active"}`}>Repositories</button>
            <button onClick={() => setType("received_events")} className={`${type === "received_events" && "active"}`}>Activity</button>
            <button onClick={() => setType("followers")} className={`${type === "followers" && "active"}`}>Followers</button>
        </div>
    )
}

export default Tabs