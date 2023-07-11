import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import styles from './../../../styles/Style.module.css'


const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            {/* <!-- slider --> */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className={styles.slider}  src="https://dkstatics-public.digikala.com/digikala-adservice-banners/05552d843da992d81559b2820ea80d0d805205d7_1682753709.gif?x-oss-process=image?x-oss-process=image/format,webp" alt="slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.slider} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4bb18f32b46574a052bc6aa725d19295b9620175_1682752536.jpg?x-oss-process=image/quality,q_95/format,webp" alt="slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.slider} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3d7d3051138c18cd7af4f80041a259bb005bcfcd_1682881328.jpg?x-oss-process=image/quality,q_95/format,webp" alt="slide" />
                    </Carousel.Item> 
                     <Carousel.Item>
                        <img className={styles.slider} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/863be056a923ab0db1d739d948dc94d761edc801_1688567510.jpg?x-oss-process=image/quality,q_95/format,webp" alt="slide" />
                    </Carousel.Item> 
                     <Carousel.Item>
                        <img className={styles.slider} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/615bf7c710400055b59914b348f31ed1c35c24c9_1688306606.jpg?x-oss-process=image/quality,q_95/format,webp" alt="slide" />
                    </Carousel.Item>
                </Carousel>
            {/* <!-- slider --> */}
        </div>
    );
};

export default Slider;