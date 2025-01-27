import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const LogOut = () => {
    const history = useHistory()
    const handleLogout = () => {
        let config = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
        }
        fetch('/logout', config)
            .then(res => res.json())
            .then(data => {
                console.log('logout data', data)
                setTimeout(() => {
                    history.push('/login');
                }, 2000);
            })
            .catch(err => console.log(err))
    }
    useEffect(handleLogout, [])
    
    return (
        <div>
            <br />
            <Spinner animation="border" variant="danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default LogOut
