import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const CategoryWithIcon = () => {
    return (
        <div>
            {/* <!-- category with icon --> */}
            <Container fluid>
                <Row className="text-center">
                    <h5>دسته بندی های دیجی کالا</h5>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png?x-oss-process=image/format,webp" alt="" />
                        <small>خانه و آشپزخانه</small>
                    </Col>
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png?x-oss-process=image/format,webp" alt="" />
                        <small>اسباب بازی، کودک و نوزاد</small>
                    </Col>
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem}>
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png?x-oss-process=image/format,webp" alt="" />
                        <small>زیبایی و سلامت</small>
                    </Col>
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png?x-oss-process=image/format,webp" alt="" />
                        <small>ورزش و سفر</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp" alt="" />
                        <small>کالای دیجیتال</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png?x-oss-process=image/format,webp" alt="" />
                        <small>خودرو، ابزار و تجهیزات صنعتی</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png?x-oss-process=image/format,webp" alt="" />
                        <small>کتاب، لوازم تحریر و هنر</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png?x-oss-process=image/format,webp" alt="" />
                        <small>مد و پوشاک</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png?x-oss-process=image/format,webp" alt="" />
                        <small>موبایل</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png?x-oss-process=image/format,webp" alt="" />
                        <small>محصولات بومی و محلی</small>
                    </Col >
                    <Col lg={2} sm={4} className={styles.categoryWithIconItem} >
                        <img src="https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png?x-oss-process=image/format,webp" alt="" />
                        <small>کالاهای سوپرمارکتی</small>
                    </Col >
                </Row >
            </Container >
            {/* <!-- category with icon --> */}
        </div >
    );
};

export default CategoryWithIcon;