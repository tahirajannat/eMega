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
            <div
                className=' object-cover bg-no-repeat w-full bg-cover h-auto bg-center '
                style={{ backgroundImage: `url(${BannerPattern})` }}
            >
                <HeaderTop />
                <HeaderBottom />
                <HeroBanner />
            </div>
            <Brands />
            <PopularBlock />
        </>
    );
}
