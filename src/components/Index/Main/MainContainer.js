import React from 'react';
import Slider from './Slider';
import Services from './Services';
import SalesSwipper from './SalesSwipper';
import SuperMarketOffer from './SuperMarketOffer';
import OfferBanner from './OfferBanner';
import CategoryWithIcon from './CategoryWithIcon';
import OfferPoster from './OfferPoster';
import DigiClub from './DigiClub';
import MainArticles from './MainArticles';
const MainContainer = () => {
    return (
        <>
            <Slider />
            <Services />
            <SalesSwipper />
            <SuperMarketOffer />
            <OfferBanner />
            <CategoryWithIcon />
            <OfferPoster />
            <DigiClub />
            <MainArticles/>
        </>
    );
};

export default MainContainer;