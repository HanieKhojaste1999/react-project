import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    var subBrands=([
        { id: 1, name: 'digimehr', image: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg" },
        { id: 2, name: 'magnet', image: 'https://www.digikala.com/statics/img/svg/footer/magnet.svg' },
        { id: 3, name: 'jet', image: 'https://www.digikala.com/statics/img/svg/footer/digiclub.svg' },
        { id: 4, name: 'digiclub', image: 'https://www.digikala.com/statics/img/svg/footer/digiclub.svg' },
        { id: 5, name: 'digiplus', image: 'https://www.digikala.com/statics/img/svg/footer/digiplus.svg' },
        { id: 6, name: 'digistyle', image: 'https://www.digikala.com/statics/img/svg/footer/digistyle.svg' },
        { id: 7, name: 'digipay', image: 'https://www.digikala.com/statics/img/svg/footer/digipay.svg' },
        { id: 8, name: 'digimag', image: 'https://www.digikala.com/statics/img/svg/footer/digimag.svg' },
        { id: 9, name: 'digikalabusiness', image: 'https://www.digikala.com/statics/img/svg/footer/digikala-business.svg' },
        { id: 10, name: 'smartech', image: 'https://www.digikala.com/statics/img/svg/footer/smartech.svg' },
        { id: 11, name: 'digify', image: 'https://www.digikala.com/statics/img/svg/footer/digify.svg' },
        { id: 12, name: 'ganje', image: 'https://www.digikala.com/statics/img/svg/footer/ganjeh.svg' },
        { id: 13, name: 'digiexpress', image: 'https://www.digikala.com/statics/img/svg/footer/digiexpress.svg' },
        { id: 14, name: 'komodaa', image: 'https://www.digikala.com/statics/img/svg/footer/komodaa.svg' },
        { id: 15, name: 'pindo', image: 'https://www.digikala.com/statics/img/svg/footer/pindo.svg' },
        { id: 16, name: 'diginext', image: 'https://www.digikala.com/statics/img/svg/footer/diginext.svg' }
    ]);
    return (
        <Container fluid>
            <Row className="mt-5">
                <Col className="d-flex justify-content-start">
                    <img src="https://www.digikala.com/statics/img/svg/digi.svg" alt="" />
                </Col>
                <Row className="mt-3">
                    <Col lg={2}>
                        تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                    </Col>
                    <Col lg={1} className="d-flex justify-content-center">|</Col>
                    <Col lg={9} className="d-flex justify-content-start">
                        ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={2} md={4} sm={6} className={styles.footerItem}>
                        <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" alt="" />
                        <small>امکان تحویل اکسپرس</small>
                    </Col>
                    <Col lg={2} md={4} sm={6} className={styles.footerItem}>
                        <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" alt="" />
                        <small>امکان پرداخت در محل</small>
                    </Col>
                    <Col lg={2} md={4} sm={6} className={styles.footerItem}>
                        <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" alt="" />
                        <small>7 روز ضمانت بازگشت کالا</small>
                    </Col>
                    <Col lg={2} md={4} sm={6} className={styles.footerItem} >
                        <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" alt="" />
                        <small>7 روز هفته ، 24 ساعته</small>
                    </Col >
                    <Col lg={2} md={4} sm={6} className={styles.footerItem} >
                        <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" alt="" />
                        <small>هفت روز ضمانت بازگشت کالا</small>
                    </Col >
                    <Col lg={2} md={4} sm={6} className={styles.footerItem} >
                        <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" alt="" />
                        <small>ضمانت اصل بودن کالا</small>
                    </Col >
                </Row >
            </Row >
            <Row className="mt-5">
                <Col lg={3} md={6} sm={6} className="d-flex flex-column align-items-center mt-3">
                    <small>با دیجی کالا</small>
                    <small>اتاق خبر دیجی کالا</small>
                    <small>فروش در دیجی کالا</small>
                    <small>فرصت های شغلی</small>
                    <small>گزارش تخلف در دیجی کالا</small>
                    <small>تماس با دیجی کالا</small>
                    <small>درباره ی دیجی کالا</small>
                </Col>
                <Col lg={3} md={6} sm={6} className="d-flex flex-column align-items-center mt-3" >
                    <small>خدمات مشتریان</small>
                    <small>پاسخ به پرسش های متداول</small>
                    <small>رویه های بازگرداندن کالا</small>
                    <small>شرایط استفاده</small>
                    <small>حریم خصوصی</small>
                    <small>گزارش باگ</small>
                </Col >
                <Col lg={3} md={6} sm={6} className="d-flex flex-column align-items-center mt-3" >
                    <small>راهنمای خرید از دیجی کالا</small>
                    <small>نحوه ثبت سفارش</small>
                    <small>رویه ارسال سفارش</small>
                    <small>شیوه های پرداخت</small>
                </Col >
                <Col lg={3} md={6} sm={6} className="d-flex flex-column align-items-center mt-3" >
                    <small>همراه ما باشید!</small>
                    <small>با ثبت ایمیل از جدیدترین تخفیف ها با خبر شوید.</small>
                    <div className="input-group mt-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">ثبت</button>
                        <input type="text" className="form-control" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </Col >
            </Row >
            <Row className={styles.downloadFooterContainer}>
                <Col lg={4} className="text-light d-flex justify-content-center align-items-center">
                    <img className={styles.footerLogo} src="https://www.digikala.com/statics/img/png/footerlogo2.png" alt="" />
                    <h5>دانلود اپلیکیشن دیجی کالا</h5>
                </Col>
                <Col lg={8} className="d-flex justify-content-between">
                    <img className={styles.footerDownloadIcon} src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg" alt="" />
                    <img className={styles.footerDownloadIcon} src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg" alt="" />
                    <img className={styles.footerDownloadIcon} src="https://www.digikala.com/statics/img/svg/appStores/myket.svg" alt="" />
                    <img className={styles.footerDownloadIcon} src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" alt="" />
                </Col>
            </Row>
            <hr />
            <Row className="mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    <small>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين
                        وب‌سايت
                        نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</small>
                </div>
            </Row>
            <Row className="mt-5 mb-2 d-flex justify-content-center align-items-center">

                {subBrands.map((subBrand, id) => {
                    return <Col key={subBrand.id} lg={2} md={3} sm={4} className={styles.footerBrandItem}><img src={subBrand.image} alt="brands" /></Col>
                })}

            </Row >
        </Container >

    );
};

export default Footer;