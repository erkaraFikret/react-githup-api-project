import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Events from '../components/events/Events'
import Repo from '../components/repo/Repo'
import Tabs from '../components/tabs/Tabs'
import UsersContainer from '../components/userContainer/UsersContainer'

function UserInfo() {
    const [user, setUser] = useState([])
    const [type, setType] = useState("repos")
    const [infos, setInfos] = useState([])
    const { pathname } = useLocation()
    const navigate = useNavigate()
    let BaseUrl = "https://api.github.com/users";

    const getUser = async () => {
        const res = await fetch(BaseUrl + pathname)
        const data = await res.json()
        setUser(() => [data])
    }

    const getUrls = async () => {
        const res = await fetch(BaseUrl + pathname + `/${type}`)
        const data = await res.json()
        setInfos(data);
        console.log(infos)
    }
    useEffect(() => {
        getUser()
        getUrls()
    }, [pathname, type])
    return (
        <div className='userInfo-container'>
            <button className='userInfo-button' onClick={() => navigate('/')}>BACK</button>
            {user && user.map((info, index) => (
                <div key={index} className="info">
                    <img src={info.avatar_url} alt="" className='info-img' />
                    <div className='info-text'>
                        <h1>{info.name}</h1>
                        <h1>
                            <span>Login_name : </span>  {info.login}
                        </h1>
                        <h1>
                            <span>Followers :</span> {info.followers}
                        </h1>
                        <h1>
                            <span>Following :</span> {info.following}
                        </h1>
                        <h1>
                            <span>Public_Repositories :</span> {info.public_repos}
                        </h1>
                        <h1>
                            <span>Join :</span> {new Date(info.created_at).toLocaleDateString()}
                        </h1>
                        <a href={info.html_url} target="_blank" className="visit-button">Visit</a>
                    </div>
                </div>
            ))}
            <div className='userİnfo-buttons'>
                <Tabs type={type} setType={setType} />
            </div>
            {type === "repos" && (
                <div className='repo'>
                    {infos && <Repo repos={infos}/>}
                </div>
            )}
            {type === "received_events" && (
                <div className='events'>
                    {infos && <Events events={infos}/>}
                    
                </div>
            )}
            {type === "followers" && (
                <div>
                    <UsersContainer users={infos}/>
                </div>
            )}
        </div>
    )
}

export default UserInfo