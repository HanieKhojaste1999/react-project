import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from './Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <Container fluid>
            {/* Top Ad */}
            <Row className={styles.TopAD}>
                <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3a12f46dbdf58de52a5b57b59604396d2c23e867_1682753878.jpg?x-oss-process=image/quality,q_95/format,webp" alt="topBanner" />
            </Row>
            {/* Top Ad */}
            {/* Top Header */}
            <Row fluid className={styles.topHeaderContainer}>
                <Col lg={2} md={2} sm={12} xs={12} className="d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
                    <section className={styles.logo}>
                        <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="logo" />
                    </section>
                </Col>
                <Col lg={6} md={6} sm={8} xs={8} className="d-flex justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-start">
                    <Form.Control className={styles.SearchInput} placeholder="جستجو" />
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className={`${styles.Icons} d-flex justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-end`}>
                    <FontAwesomeIcon className='mx-2' icon={faUser} />
                    <FontAwesomeIcon className='mx-2' icon={faCartShopping} />
                </Col>
            </Row >

            {/* Top Header */}
            <Navbar />


        </Container>
    );
};

export default Header;