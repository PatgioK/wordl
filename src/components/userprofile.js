import './userprofile.css';
import {fetchUserData } from '../../src/api';
import { useState, useEffect } from 'react';

export default function UserProfile() {
    const [userData, setUserData] = useState('');
    const [userDataString, setUserDataString] = useState('');


    const displayUserData = async () => {
        const ud = await fetchUserData()
        setUserData(ud);
    }

    useEffect(() => {
        const udstr = JSON.stringify(userData, null, 2);
        setUserDataString(udstr);

    }, [userData])

    return (
        <div className='userprofile'>
            <h1>test sadfdsfa user profile</h1>
            <button onClick={() => {
                displayUserData();
                console.log(userDataString);
                console.log(userData);
            }}> Fetch Random User </button>
            <pre>
                {userDataString}
            </pre>
        </div>
    )

}