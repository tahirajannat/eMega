import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { firestore } from '../../firebase/index';
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
    const messageRef = useRef();
    const ref = collection(firestore, 'products');
    const productsRef = collection(firestore, 'products');
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const productData = await getDocs(productsRef);
                setAllData(
                    productData.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData(); // Invoke the function here to fetch data when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once

    const handleSave = async (e) => {
        e.preventDefault();
        let data = {
            message: messageRef.current.value,
        };
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    };
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
