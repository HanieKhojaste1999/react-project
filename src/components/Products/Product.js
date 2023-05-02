import React from 'react';
import Header from './../Index/Header/Header.js';
import { Container , Breadcrumb , Row , Col } from 'react-bootstrap';
import styles from './../../styles/Style.module.css';

const Product = () => {
    return (
        <div>
            <Header />
            {/* <!-- breadCrumb --> */}
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">دیجی کالا</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"> زیبایی و سلامت </Breadcrumb.Item>
                            <Breadcrumb.Item active>عطر و ادکلن </Breadcrumb.Item>
                            <Breadcrumb.Item active> عطر و ادکلن زنانه  </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-end">
                        <div>
                            <small>ثبت آگهی در پیندو</small>
                        </div>
                        <div>
                            <small>فروش در دیجی کالا</small>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <!-- breadCrumb --> */}
            {/* <!-- product --> */}
            <Container fluid>
                <Row>
                    <Col lg={4} className={styles.productImg}>
                        <img src="https://dkstatics-public.digikala.com/digikala-products/a742ac675bf69ed3abfdc43b16f93c255fed8b8b_1646310725.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
                    </Col>
                    <Col lg={5}>
                        <section>
                            <Breadcrumb className={styles.myItemBreadcrumb}>
                                <Breadcrumb.Item href="#">دیجی کالا</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">  فراگرنس پرشیا 116 </Breadcrumb.Item>
                                <Breadcrumb.Item active>عطر و ادکلن زنانه فراگرنس پرشیا 116</Breadcrumb.Item>
                            </Breadcrumb>
                        </section>
                        <section>
                            <h5>ادو پرفیوم زنانه فراگرنس پرشیا 116 مدل شنل چنس حجم 100 میلی لیتر</h5>
                        </section>
                        <hr />
                        <section className="d-flex justify-content-start">
                            <p className="xSmall me-3">
                                <i className="fa fa-star text-warning"></i>
                                ۳.۶ (۳۴۵)
                            </p>
                            <p className="xSmall me-3">
                                259 دیدگاه
                            </p>
                            <p className="xSmall me-3">
                                5 پرسش
                            </p>
                        </section>
                        <section className="mt-3">
                            <p className="xSmall">
                                درخواست مرجوع کردن کالا در گروه عطر و ادکلن زنانه با دلیل "انصراف از خرید" تنها در صورتی قابل
                                تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).
                            </p>
                        </section>
                        <section>
                            <div className={styles.productTextCaptions}>
                                <p className={styles.purpuleCaption}>ارسال <b>رایگان</b> سفارش‌ها برای اعضای دیجی‌پلاس</p>
                                <p className="xSmall">۲۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر دیجی‌پلاس</p>
                            </div>
                            <div className={styles.productTextCaptions}>
                                <small><b>الان بخر بعدا پرداخت کن!</b></small>
                                <br />
                                <small>با اعتبار دیجی پی الان بخرید ، ابتدای ماه بعد بپردازید</small>
                            </div>
                            <div className={styles.productTextCaptions}>
                                <small>ویژه اعضای دیجی پلاس</small>
                                <br />
                                <small>ارسال رایگان</small>
                                <br />
                                <small>امکان ارسال فوری(شهر تهران)</small>
                            </div>
                        </section>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.productPriceContainer}>
                            <Row>
                                <h5>فروشنده</h5>
                            </Row>
                            <Row>
                                <h5>گالری عطر بارانا</h5>
                                <small>74% رضایت از کالا | عملکرد خیلی خوب</small>
                            </Row>
                            <hr />
                            <Row>
                                <small>گارانتی اصالت و سلامت فیزیکی کالا</small>
                            </Row>
                            <hr />
                            <Row>
                                <h6>موجود در انبار دیجی کالا</h6>
                                <small>ارسال دیجی کالا</small>
                            </Row>
                            <hr />
                            <Row>
                                <small>19 امتیاز دیجی کلاب</small>
                            </Row>
                            <Row className="mt-4">
                                <section className="d-flex justify-content-between">
                                    <small>قیمت فروشنده</small>
                                    <section>
                                        <small><del>485000تومان</del></small>
                                        <small>185000تومان </small>
                                    </section>

                                </section>
                            </Row>
                            <Row className="mt-3">
                                <button className="btn btn-danger" type="button">افزودن به سبد</button>
                            </Row>
                        </div>
                        <div className={styles.productTextCaption}>
                            <small>فرآیند قیمت گذاری و نظارت بر قیمت</small>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <!-- product --> */}
        </div>
    );
};

export default Product;