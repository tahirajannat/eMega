import React from 'react';
import Brands from '../common/Brands';
import HeroBanner from '../common/HeroBanner';
import PopularBlock from '../common/PopularBlock';
import HeaderBottom from '../header/HeaderBottom';
import HeaderTop from '../header/HeaderTop';
import NewArival from './section/NewArival';

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
        </>
    );
}
