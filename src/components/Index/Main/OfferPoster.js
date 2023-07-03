import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const OfferPoster = () => {
    return (
      
            <Container className={styles.offerPosterContainer}>
                <Row className="d-flex justify-content-around">
                    <Col lg={6} sm={12} className={styles.offerPoster}>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9f69814c7ea1b61ab462e652d52f12bd3ae8675e_1682762711.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col>
                    <Col lg={6} sm={12} className={styles.offerPoster}>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/04b9f74a3e7a9800e46edc7c6788afd97e0f271d_1674896265.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />
                    </Col>
                </Row>
            </Container >
          
    );
};

export default OfferPoster;