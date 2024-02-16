import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Popular1 from '../../../assets/image-product-1.png';
import Popular2 from '../../../assets/image-product-2.png';
import Popular3 from '../../../assets/image-product-3.png';
import Popular4 from '../../../assets/image-product-4.png';
import Button from '../../common/Button';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

export default function LeadCollection() {
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
            <div>
                <h2 className='text-center text-4xl font-semibold my-20 capitalize'>
                    Follow products and discounts on Instagram
                </h2>
                <div className='grid grid-cols-6 gap-7'>
                    {popularProducts.slice(0, 6).map((product) => (
                        <img
                            key={product.id}
                            src={product.src}
                            alt=''
                            className=' h-48 w-full object-cover'
                        />
                    ))}
                </div>
            </div>
            <div className=' mx-auto w-2/3'>
                <h2 className='text-center text-4xl font-semibold my-20 capitalize'>
                    Or subscribe to the newsletter
                </h2>
                <div className='relative flex gap-6 justify-between'>
                    {/* <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                        <HiOutlineSearch
                            className='h-5 w-5 text-primary font-thin'
                            aria-hidden='true'
                        />
                    </div> */}
                    <input
                        id='search'
                        name='search'
                        className='block w-full border-b border-primary py-3 text-base font-thin pr-3  bg-white text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 shadow-none'
                        placeholder='Email address...'
                        type='text'
                    />
                    <Button
                        // onClick={handlePopupSave}
                        // buttonStyle={
                        //     isDisabled
                        //         ? 'buttonDisable'
                        //         : 'buttonPrimary'
                        // }
                        buttonStyle='buttonPrimary'
                        iconPosition={'after'}
                        addBgColor={false}
                        classNames={
                            '!wm-text-white border-b border-primary  w-auto flex-shrink-0 '
                        }
                        classes={'!px-5 py-[0.8rem] text-base'}
                        icon={
                            <FaLocationArrow className='text-lg text-primary !shadow-none' />
                        }
                        // disabled={isLoading || isDisabled}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
