import React from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
import styles from './../../../styles/Style.module.css';
const MainArticles = () => {
    return (
        <Container className={styles.mainArticles}>
            <Row>
                <Col className='d-flex justify-content-start' lg={6} sm={6} md={6} xs={6} xxl={6}> <h6>خواندنی ها</h6></Col>
                <Col className='d-flex justify-content-end' lg={6} sm={6} md={6} xs={6} xxl={6}> <a href="#">مطالب بیشتر در دیجی کالا مگ  </a></Col>
            </Row>
            <Row>
                <Col className='my-2' lg={3} md={6} sm={12} xs={12}>
                    <Card>
                        <Card.Img variant="top" src="https://www.digikala.com/mag/wp-content/uploads/2023/07/tv-antenna-1-610x380.jpg" />
                        <Card.Body>
                            <Card.Text>
                                معرفی بهترین آنتن های رومیزی،18 مدل اقتصادی و کاربردی
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-2' lg={3} md={6} sm={12} xs={12}>
                    <Card>
                        <Card.Img variant="top" src="https://www.digikala.com/mag/wp-content/uploads/2023/07/what-is-wintoys-guide-0-610x380.png" />
                        <Card.Body>
                            <Card.Text>
                                معرفی نرم‌افزار Wintoys؛ بهینه‌سازی ویندوز به بهترین شکل
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-2' lg={3} md={6} sm={12} xs={12}>
                    <Card>
                        <Card.Img variant="top" src="https://www.digikala.com/mag/wp-content/uploads/2023/07/Nothing-Phone-2-610x380.jpg" />
                        <Card.Body>
                            <Card.Text>
                                گوشی ناتینگ فون ۲ با طراحی تکراری و قیمت ۵۹۹ دلار معرفی شد
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-2' lg={3} md={6} sm={12} xs={12}>
                    <Card>
                        <Card.Img variant="top" src="https://www.digikala.com/mag/wp-content/uploads/2023/07/04.16-4-610x380.jpg" />
                        <Card.Body>
                            <Card.Text>
                                بررسی ماشین ساختنی شیائومی Desert Racing car؛ جذاب‌تر از انتظار
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

    );
};

export default MainArticles;