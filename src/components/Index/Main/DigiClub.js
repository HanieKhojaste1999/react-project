import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const SuperMarketOffer = () => {
    return (
        <div>
            <Container>
                <Row className=" d-flex justify-content-center">
                    <Row className={styles.digiClub}>
                       <Col lg={3}>
                        <img src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" alt="digiclub" />
                       </Col>
                       <Col className={styles.digiClubPoint} lg={3}>
                        <h5>امتیاز شما 39</h5>
                        <img src="https://www.digikala.com/statics/img/svg/club-point.svg" alt="clubPoint" />
                       </Col>
                       <Col className={styles.digiClubOptions} lg={6}>
                        <div>
                           <b>جایزه ها</b>
                            <img src="https://www.digikala.com/statics/img/png/digiclub/awards.png" alt="" />
                        </div>
                        <div>
                            <b>ماموریت ها</b>
                            <img src="https://www.digikala.com/statics/img/png/digiclub/missions.png" alt="" />
                        </div>
                        <div>
                            <b>چرخ و بخت</b>
                            <img src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg" alt="" />
                        </div>
                       </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default SuperMarketOffer;