import React from 'react'
import './usercontainer.css'
import { Link } from 'react-router-dom'

function UsersContainer({ users }) {
    return (
        <div className='user-container'>
            {users && users.map((user, index) => (
                user?.login && (
                    <div key={index} className="user-main">
                        <img src={user?.avatar_url} alt="" className='user-img' />
                        <h1 className='user-text-1'>{user?.login}</h1>
                        <h1 className='user-text-2'>{user?.name}</h1>
                        <Link to={`/${user.login}`}>
                        <span className='user-span'>
                            View
                        </span>
                        </Link>
                    </div>
                )
            ))}
        </div>
    )
}

export default UsersContainer