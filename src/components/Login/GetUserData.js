import React from 'react';
import { useEffect } from 'react';

const GetUserData = () => {
    useEffect(() => {
        fetch('https://api.storerestapi.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);
    return (
        <div>

        </div>
    );
};

export default GetUserData;