import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            {/* <!-- services --> */}
            <Container fluid>
                <Row className={styles.service}>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png" alt="" />
                        <h6 className="">دیجی کالا جت</h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png" alt="" />
                        <h6>حراج ساعت</h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png" alt="" />
                        <h6>خرید اقساطی </h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1680678388.png" alt="" />
                        <h6>  دیجی کالا سرویس </h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/f18a182f7c300af9ce3eb8f47201ef340fc87eb3_1670930133.png" alt="" />
                        <h6> چرخ و بخت  </h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png" alt="" />
                        <h6>دیجی پلاس </h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png" alt="" />
                        <h6> ماموریت ها</h6>
                    </Col>
                    <Col className={styles.servicesItem}>
                        <div className={styles.moreServices}>
                            <h2>...</h2>
                        </div>
                            <h6>بیشتر</h6>
                    </Col>
                </Row>
            </Container>
            {/* <!-- services --> */}
        </div>
    );
};

export default Services;