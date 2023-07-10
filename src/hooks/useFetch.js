// import React from 'react';
import { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const [datas, setdatas] = useState(null);
    useEffect((url) => {
        fetch(url)
            .then(response => response.json())
            .then(json => setdatas(json))
    }, []);
    return [datas];

};

export default UseFetch;