import React from 'react';
import { Alert } from 'react-bootstrap';
const LoginGreeting = ({ setshowGreeting }) => {
    return (
        <div>
            <Alert variant="success" onClose={() => { setshowGreeting(false) }} dismissible>
                <Alert.Heading>سلام هانیه عزیز</Alert.Heading>
                <p>
                    شما با موفقیت وارد شدید
                </p>
            </Alert>
        </div>
    );
};

export default LoginGreeting;