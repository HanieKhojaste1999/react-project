import React from 'react';
import styles from './../../styles/Style.module.css';
import { Row, Button } from 'react-bootstrap';
import useFetch from './../../hooks/useFetch';

const Login = () => {
    const [users] = useFetch('https://jsonplaceholder.typicode.com/users');
    
    return (
        <div>
          
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
                        <Button variant="danger">ورود</Button>
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