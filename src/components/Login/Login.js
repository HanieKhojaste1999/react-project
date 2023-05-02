import React from 'react';
import styles from './../../styles/Style.module.css';
import { Row, Button, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import LoginGreeting from './LoginGreeting';

const Login = () => {
    const [loginStatus, setloginStatus] = useState(false);
    const [showGreeting, setshowGreeting] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setloginStatus(false);
            setshowGreeting(true);
        }, 6000)
    }, [loginStatus])
    return (
        <div>
            {showGreeting && <LoginGreeting setshowGreeting={setshowGreeting} />}
            <div className={styles.loginMainContainer}>

                <div className={styles.loginContainer}>
                    <Row className="d-flex justify-content-center">
                        <img className={styles.logoSvg} src="./../../images/logo.svg" alt="" />
                    </Row>
                    <Row className="d-flex justify-content-start mt-2">
                        <h5>ورود | ثبت نام</h5>
                    </Row>
                    <Row className="mt-4">
                        <small>سلام!
                            <br />
                            لطفا شماره موبایل یا ایمیل خود را وارد کنید</small>
                    </Row>
                    <Row className="mt-3">
                        <input className="form-control" type="text" />
                    </Row>
                    <Row className="mt-4">
                        <Button disabled={loginStatus && true} onClick={() => setloginStatus(true)} variant="danger">{loginStatus ? <Spinner animation="border" variant="light" /> : 'ورود'}</Button>
                    </Row>
                    <Row className="mt-2">
                        <p className={styles.logoTermOfServiceText}>ورود شما به معنای پذیرش شرایط آنلاین شاپ و قوانین حریم‌ خصوصی است</p>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Login;