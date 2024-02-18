import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Popular1 from '../../../assets/image-product-1.png';
import Popular2 from '../../../assets/image-product-2.png';
import Popular3 from '../../../assets/image-product-3.png';
import Popular4 from '../../../assets/image-product-4.png';
import Ribbon from '../../common/Ribbon';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

export default function BestSeller() {
    const products =[
        {
            id: 1,
            title: "Product Name",
            description: "Product description goes here.",
            category: "Electronics",
            brand: "Brand Name",
            price: 199.99,
            discountPercentage: 10,
            stock: 50,
            image: "product_image.jpg",
            ratings: {
              average: 4.5,
              total: 200
            },
            features: [
              "Feature 1",
              "Feature 2",
              "Feature 3"
            ],
            shippingInfo: {
              freeShipping: true,
              estimatedDelivery: "2-4 business days"
            },
            deal: "Sale",
            status: {
              bestSeller: true,
              newArrival: false
            },
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-10T15:30:00Z"
          }
          
          
    ]
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
            deal: 'sale',
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
            deal: 'hot',
            price: 130,
        },
        {
            id: 6,
            title: 'Geometric print Scarf',
            src: Popular3,
            link: '/',
            category: 'scarf',
            totalItems: 10,
            deal: 'sale',
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
            deal: 'hot',
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
            <h2 className='text-center text-4xl font-semibold my-20 capitalize'>
                best Seller
            </h2>

            <Tabs active={active} onChange={handleChange}>
                <Tab title='All Product'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // loop={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                    >
                        {popularProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div
                                    key={product.id}
                                    className='relative col-span-1 my-4'
                                    style={{ width: '100%' }} //
                                >
                                    <div>
                                        <img
                                            className='h-full w-full object-cover'
                                            src={product.src}
                                            alt=''
                                        />

                                        {product.deal && (
                                            <Ribbon
                                                title={product.deal}
                                                backgroundColor={
                                                    product.deal ===
                                                    'sale'
                                                        ? 'black'
                                                        : 'primary'
                                                }
                                                textColor={'white'}
                                            />
                                        )}
                                        <h2 className='text-base capitalize font-semibold py-4 '>
                                            Nike Sportswear Futura Luxe
                                        </h2>
                                        <div className='flex justify-between items-center '>
                                            <label className='text-gray-400 capitalize'>
                                                {product.category}
                                            </label>

                                            {product.salePrice ? (
                                                <label className='text-primary font-normal'>
                                                    <del className='mr-3 text-gray-400'>
                                                        $220.00
                                                    </del>
                                                    $130.00
                                                </label>
                                            ) : (
                                                <label className='font-normal'>
                                                    $130.00
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Tab>
                <Tab title='T-Shirts'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // loop={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                    >
                        {popularProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div
                                    key={product.id}
                                    className='relative col-span-1 my-4'
                                    style={{ width: '100%' }} //
                                >
                                    <div>
                                        <img
                                            className='h-full w-full object-cover'
                                            src={product.src}
                                            alt=''
                                        />

                                        {product.deal && (
                                            <Ribbon
                                                title={product.deal}
                                                backgroundColor={
                                                    product.deal ===
                                                    'sale'
                                                        ? 'black'
                                                        : 'primary'
                                                }
                                                textColor={'white'}
                                            />
                                        )}
                                        <h2 className='text-base capitalize font-semibold py-4 '>
                                            Nike Sportswear Futura Luxe
                                        </h2>
                                        <div className='flex justify-between items-center '>
                                            <label className='text-gray-400 capitalize'>
                                                {product.category}
                                            </label>

                                            {product.salePrice ? (
                                                <label className='text-primary font-normal'>
                                                    <del className='mr-3 text-gray-400'>
                                                        $220.00
                                                    </del>
                                                    $130.00
                                                </label>
                                            ) : (
                                                <label className='font-normal'>
                                                    $130.00
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Tab>
                <Tab title='Jackets'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // loop={true}
                        navigation={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className='mySwiper relative'
                    >
                        {popularProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div
                                    key={product.id}
                                    className='relative col-span-1 my-4'
                                    style={{ width: '100%' }} //
                                >
                                    <div>
                                        <img
                                            className='h-full w-full object-cover'
                                            src={product.src}
                                            alt=''
                                        />

                                        {product.deal && (
                                            <Ribbon
                                                title={product.deal}
                                                backgroundColor={
                                                    product.deal ===
                                                    'sale'
                                                        ? 'black'
                                                        : 'primary'
                                                }
                                                textColor={'white'}
                                            />
                                        )}
                                        <h2 className='text-base capitalize font-semibold py-4 '>
                                            Nike Sportswear Futura Luxe
                                        </h2>
                                        <div className='flex justify-between items-center '>
                                            <label className='text-gray-400 capitalize'>
                                                {product.category}
                                            </label>

                                            {product.salePrice ? (
                                                <label className='text-primary font-normal'>
                                                    <del className='mr-3 text-gray-400'>
                                                        $220.00
                                                    </del>
                                                    $130.00
                                                </label>
                                            ) : (
                                                <label className='font-normal'>
                                                    $130.00
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Tab>
            </Tabs>
        </div>
    );
}
