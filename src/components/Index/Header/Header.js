import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            {/* <!-- Top Ad --> */}
            <Container fluid>
                <Row>
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3a12f46dbdf58de52a5b57b59604396d2c23e867_1682753878.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                </Row>
            </Container>
            {/* <!-- Top Ad -->
                <!-- Top Header --> */}

            <Container fluid className={styles.topHeaderContainer}>
                <Row>
                    <Col lg={1} md={1} sm={12} className="d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
                        <section className={styles.logo}>
                            <img className={styles.logo} src="https://www.digikala.com/statics/img/svg/logo.svg" alt="logo" />
                        </section>
                    </Col>
                    <Col lg={7} md={7} sm={6} className="d-flex justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-start">
                        <input className="searchInput" type="text" placeholder="جستجو" name="" id="" />
                    </Col>
                    <Col lg={4} md={4} sm={6} className="d-flex justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-end">
                        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                    </Col>
                </Row >
            </Container >

            {/* {/* <!-- Top Header --> */}
               

        </div >
    );
};

export default Header;