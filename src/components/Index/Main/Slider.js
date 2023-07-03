import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



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
                        <img className="d-block w-100" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/05552d843da992d81559b2820ea80d0d805205d7_1682753709.gif?x-oss-process=image?x-oss-process=image/format,webp" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4bb18f32b46574a052bc6aa725d19295b9620175_1682752536.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3d7d3051138c18cd7af4f80041a259bb005bcfcd_1682881328.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            {/* <!-- slider --> */}
        </div>
    );
};

export default Slider;