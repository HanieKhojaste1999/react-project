import React from 'react';
import styles from './../../../styles/Style.module.css';
import { Container, Row, Card, Badge } from 'react-bootstrap';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper";


const SalesSwipper = () => {
    const [salesSwipperItems] = useState([
        {
            id: 1,
            name: 'ادو پرفیوم زنانه نیفتی مدل لالیک لامور   ',
            price: 200000,
            description: 'لامور با بوی شیرین و ملایمش که به خنکی نزدیک است، شادی وصف ناپذیری برای دوست داران این عطر به ارمغان می آورد.پس از اسپری‌کردن این عطر روی پوست و محل نبضتان، بوی شکوفه‌ی پرتقال، نارنج و گل رز را احساس خواهید کرد. این ترکیب شیرین، طراوت و تازگی را به روح شما تزریق خواهد کرد. پس از مدتی، نت‌های میانی از راه رسیده و جای نت‌های آغازی را می‌گیرند. این نت‌ها از گل یاسمین، مریم و گاردنیا ساخته ‌شده‌اند.',
            image: 'https://dkstatics-public.digikala.com/digikala-products/c2b4d40585fb25175ae169d9f982522d6192468a_1644613257.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        },
        {
            id: 2,
            name: 'ژل صورت سودا مدل لیفتینگ آلوئه ورا',
            price: 50000,
            description: '',
            image: 'https://dkstatics-public.digikala.com/digikala-products/2285030.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        },
        {
            id: 3,
            name: 'جارو برقی درما مدل dx900',
            price: 10000000,
            description: 'گر به دنبال جاروبرقی جمع و جور ، قدرتمند و قابل انعطاف در تمیز کردن فضای فرش ، کف و گوشه های باریک هستید ، جاروبرقی دستی Deerma DX900 شیائومی انتخاب شما خواهد بود. مناسب ترین را انتخاب کنید.جاروبرقی دستی Deerma DX900 شیائومی جدیدترین محصول جاروبرقی این برند است. این محصول در ظاهر جمع و جور ، مونتاژ آسان ، ظرفیت عملیاتی قدرتمند و مجهز به 3 هد مکش مختلف بهبود یافته است ، نیازهای تمیزکاری را در بسیاری از مناطق مختلف برآورده می کند .',
            image: 'https://dkstatics-public.digikala.com/digikala-products/a14a9b0f9b0168c955dfa3e58969e3feb36f136d_1682926853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        },
        {
            id: 4,
            name: 'ادو پرفیوم مردانه نیفتی مدل پاکو',
            price: 10000000,
            description: '',
            image: 'https://dkstatics-public.digikala.com/digikala-products/da0e6701c9596cacb4d288e18b61799616f3b070_1675324045.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        },
        {
            id: 5,
            name: 'سشوار برس دار چرخشی بابیلیس ',
            price: 3000000,
            description: 'سری برس دار ۵۰ میلی متری سری برس دار ۲۰ میلی متری سری دندانه دار سرامیکی جهت صاف کردن مو سری متمرکر کننده هوای گرم بر روی مو کیف نگه داری لوازم جانبی',
            image: 'https://dkstatics-public.digikala.com/digikala-products/b7fa55c1b468acdee1030f27a3fa0f0050e48766_1652776684.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        },
        {
            id: 6,
            name: 'هندزفری بلوتوثی کربی',
            price: 20000000,
            description: 'هدست کربی BE-T107 TRANSPARENT با صدای با کیفیت و طراحی متفاوت گزینه جذابی برای فعالیت های روزانه شما میباشد.برای استفاده از این محصول درپوش محفظه شارژ را باز کنید و هدست به طور خودکار روشن و جفت می شود و به دستگاه بلوتوث (5.2) متصل می شود.قطر درایو این دستگاه 13 میلیمتر بوده و به این علت شما شاهد بلندی و کیفیت صدای عالی خواهیدبود.. هدفون BE-T107 دارای عملکرد تماس دو کاناله است و هدفون چپ و راست را می توان به طور مستقل به دو دستگاه متصل کرد.',
            image: 'https://dkstatics-public.digikala.com/digikala-products/fd699e60d162e692b6adb421e4c509c47e345adc_1677503418.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        }
    ]);
    return (
        <div>
            {/* <!-- sales swipper --> */}
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center">
                    <div className={styles.salesSwipper}>
                        <div>
                            <img src="https://www.digikala.com/statics/img/svg/specialCarousel/FeaturedPromos.svg" alt="" />
                            <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="" />
                        </div>
                        <Swiper breakpoints={{
                            // when window width is >= 640px
                            992: {
                                width: 992,
                                slidesPerView: 4,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            576: {
                                width: 576,
                                slidesPerView: 2,
                            },
                            300: {
                                width: 300,
                                slidesPerView: 2,
                            },

                        }} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true }} modules={[Scrollbar]} className={styles.swiper}>
                            {salesSwipperItems.map((salesSwipperItems) => {
                                return <SwiperSlide className={styles.swiperSlide}>
                                    <Card className={styles.swipperItem}>
                                        <Card.Img variant="top" src={salesSwipperItems.image} />
                                        <Card.Body>
                                            <Card.Text>
                                                <section>
                                                    <small>  {salesSwipperItems.name}</small>
                                                </section>
                                                <br />
                                                <section className='d-flex justify-content-between align-items-center'>
                                                    <Badge bg="danger"> 35% </Badge>
                                                    <small className="text-muted">{salesSwipperItems.price}تومان</small>
                                                </section>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </Row>
            </Container>
            {/* <!-- sales swipper --> */}
        </div>
    );
};

export default SalesSwipper;