import React, { useEffect, useState, useRef } from 'react'
import Loading from '../components/loading/Loading';
import UsersContainer from '../components/userContainer/UsersContainer'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    let BaseUrl = "https://api.github.com/users";
    const user = useRef('')
    const allUsers = async () => {
        if (user.current.value === "") {
            setLoading(true)
            const res = await fetch(BaseUrl)
            const data = await res.json();
            // console.log(data)
            setUsers(data)
            setLoading(false)
        }
    }
    const FindUser = async () => {
        setLoading(true)
        if (user.current.value !== '') {
            setUsers("")
            const res = await fetch(BaseUrl + '/' + user.current.value)
            const data = await res.json();
            setUsers(() => [data])
            user.current.value = ""
        } else {
            allUsers()
        };
        setLoading(false)
    }
    useEffect(() => {
        allUsers()
    }, [setUsers])
    return (
        <div>
            <div className='input-container'>
                <input type="text" placeholder='Search github username...' className='input' ref={user} />
                <button className='input-button' onClick={FindUser}>
                    Search
                </button>
            </div>
            {loading ? <Loading /> : <UsersContainer users={users} />}
        </div>
    )
}

export default Users