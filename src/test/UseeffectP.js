import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const UseeffectP = () => {
    const [loadingStatus, setloadingStatus] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setloadingStatus(false)
        }, 3000)
    }, [loadingStatus]);
    return (
        <div>
            <Button disabled={loadingStatus && true} onClick={() => setloadingStatus(true)}>{loadingStatus ? 'Loading...' : 'Click Me'}</Button>
        </div>
    );
};

export default UseeffectP;