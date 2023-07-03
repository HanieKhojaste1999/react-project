import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const OfferBanner = () => {
    return (
            <Container className={styles.offerBannerContainer}>
                <Row>
                    <Col lg={3} sm={6} className={styles.offerBannerItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3056952e59f2e85aa1cad27d79b2f7b060d20bb0_1675849450.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col>
                    <Col lg={3} sm={6} className={styles.offerBannerItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f1105959092c908f462c92453d098429f1c1744a_1682746872.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col>
                    <Col lg={3} sm={6} className={styles.offerBannerItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/63dfbf5d9cc3a25f682da0d88aeaf27c6aee1138_1682746222.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col>
                    <Col lg={3} sm={6} className={styles.offerBannerItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a853fb9f2878899cd1b30cc6cf5e03bb1fb4930f_1682317817.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col >
                </Row >
            </Container >
    );
};

export default OfferBanner;