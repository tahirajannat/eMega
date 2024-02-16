import React from 'react';
import Brands from '../common/Brands';
import HeroBanner from '../common/HeroBanner';
import PopularBlock from '../common/PopularBlock';
import Footer from '../footer/Footer';
import HeaderBottom from '../header/HeaderBottom';
import HeaderTop from '../header/HeaderTop';
import BestSeller from './section/BestSeller';
import LeadCollection from './section/LeadCollection';
import NewArival from './section/NewArival';
import PromotionalBanner from './section/PromotionalBanner';

export default function Home() {
    return (
        <>
            <div className='bg-gray-200'>
                <HeaderTop />
                <HeaderBottom />
                <HeroBanner />
            </div>
            <Brands />
            <PopularBlock />
            <NewArival />
            <div className='my-40'>
                <PromotionalBanner />
            </div>
            <BestSeller />
            <div className='my-40'>
                <LeadCollection />
            </div>
            <Footer />
        </>
    );
}
