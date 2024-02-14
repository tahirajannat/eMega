import React from 'react';
import BannerPattern from '../../assets/top-main.png';
import Brands from '../common/Brands';
import HeroBanner from '../common/HeroBanner';
import PopularBlock from '../common/PopularBlock';
import HeaderBottom from '../header/HeaderBottom';
import HeaderTop from '../header/HeaderTop';

export default function Home() {
    return (
        <>
            <div >
                <HeaderTop />
                <HeaderBottom />
                <HeroBanner />
            </div>
            <Brands />
            <PopularBlock />
        </>
    );
}
