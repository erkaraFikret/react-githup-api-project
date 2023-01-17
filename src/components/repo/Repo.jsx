import React from 'react'
import './repo.css'

function Repo({ repos }) {
    return (
        <>
            {repos.map((repo, index) => (
                <div key={index} className="repo-container">
                    <a href={repo.html_url} target="_blank" className='repo-link' rel="noreferrer">
                        {repo.full_name}
                    </a>
                    <div className='repo-info'>
                        <h1>{"🟢" + repo.language}</h1>
                        <h1>forks : {repo.forks}</h1>
                        <h1>stars : {repo.stargazers_count}</h1>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Repo