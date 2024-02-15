import React, { useState } from 'react';
import Popular1 from '../../../assets/image-product-1.png';
import Popular2 from '../../../assets/image-product-2.png';
import Popular3 from '../../../assets/image-product-3.png';
import Popular4 from '../../../assets/image-product-4.png';
import ProductCard from '../../common/ProductCard';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';

export default function NewArival() {
    const popularProducts = [
        {
            id: 1,
            title: 'Adicolor Classics Joggers',
            src: Popular1,
            link: '/',
            category: 'dress',
            totalItems: 10,
            price: 160,
        },
        {
            id: 2,
            title: 'Nike Sportswear Futura Luxe',
            src: Popular2,
            link: '/',
            category: 'bag',
            totalItems: 10,
            price: 200,
        },
        {
            id: 3,
            title: 'Geometric print Scarf',
            src: Popular3,
            link: '/',
            category: 'scarf',
            totalItems: 10,
            price: 130,
        },
        {
            id: 4,
            title: 'Yellow Reserved Hoodie',
            src: Popular4,
            link: '/',
            category: 'dress',
            totalItems: 10,
            ribonTitle: 'sale',
            price: 220,
            salePrice: 198,
        },
        {
            id: 5,
            title: 'Yellow Reserved Hoodie',
            src: Popular4,
            link: '/',
            category: 'dress',
            totalItems: 10,
            ribonTitle: 'hot',
            price: 130,
        },
        {
            id: 6,
            title: 'Geometric print Scarf',
            src: Popular3,
            link: '/',
            category: 'scarf',
            totalItems: 10,
            ribonTitle: 'sale',
            price: 220,
            salePrice: 198,
        },
        {
            id: 7,
            title: 'Nike Sportswear Futura Luxe',
            src: Popular2,
            link: '/',
            category: 'bag',
            totalItems: 10,
            ribonTitle: 'hot',
            price: 120,
        },
        {
            id: 8,
            title: 'Adicolor Classics Joggers',
            src: Popular1,
            link: '/',
            category: 'dress',
            totalItems: 10,
            price: 220,
        },
    ];

    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);
    return (
        <div className='container px-20 mx-auto my-20'>
            <h2 className='text-center text-4xl font-semibold my-20'>
                New Arival
            </h2>

            <Tabs active={active} onChange={handleChange}>
                <Tab title='All Product'>
                    <div className='grid grid-cols-4 gap-10 '>
                        <ProductCard items={popularProducts} />
                    </div>
                </Tab>
                <Tab title='T-Shirts'>hello</Tab>
                <Tab title='Jackets'>hello</Tab>
            </Tabs>
        </div>
    );
}
