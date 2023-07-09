import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const SuperMarketOffer = () => {
    return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Row className={styles.superMarketOffer}>
                        <Col lg={6} className={styles.superMarketOfferTitle}>
                            <img className='mx-2' src="https://www.digikala.com/statics/img/png/amazing/fresh.png" alt="" />
                            <img className='mx-2' src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="" />
                            <div className={`${styles.superMarketOfferPill} mx-2`}> تا %38 تخفیف</div>
                        </Col>
                        <Col lg={6} className={styles.superMarketOfferItem}>
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/a95a06797f4da05baa353a67b3831a92c49b0172_1662451670.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/586a166ffe7c080627b9d2abf59e8ef0b6cc2c77_1610263351.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/121796619.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/3dd18fac8c55c43f9c44c36be2be0d3649f8def2_1676976039.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/4096215.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <img className={styles.seperMarketOfferRoundedImg} src="https://dkstatics-public.digikala.com/digikala-products/487004.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
                            <div className={styles.superMarketOfferPill}> بیش از 90 کالا <i className="fa fa-arrow-left"></i></div>
                        </Col>
                    </Row>
                </Row>
            </Container>

    );
};

export default SuperMarketOffer;