import React from 'react';
// import Popular4 from '../../assets/product/item-category-1.png';
// import Popular2 from '../../assets/product/item-category-2.png';
// import Popular3 from '../../assets/product/item-category-3.png';
// import Popular1 from '../../assets/product/item-category.png';
import Popular1 from '../../assets/image-category-1.png';
import Popular2 from '../../assets/item-category-2.png';
import Popular3 from '../../assets/item-category-3.png';
import Popular4 from '../../assets/item-category.png';
import Ribbon from './Ribbon';

export default function PopularBlock() {
    const popularProducts = [
        {
            id: 1,
            name: Popular1,
            link: '/',
            category: 'manto',
            totalItems: 10,
            ribonTitle: 'hot',
        },
        {
            id: 2,
            name: Popular2,
            link: '/',
            category: 'coat',
            totalItems: 10,
            ribonTitle: 'sale',
        },
        {
            id: 3,
            name: Popular3,
            link: '/',
            category: 'pants',
            totalItems: 10,
        },
        {
            id: 4,
            name: Popular4,
            link: '/',
            category: 'shirts',
            totalItems: 10,
            ribonTitle: 'hot',
        },
        {
            id: 5,
            name: Popular3,
            link: '/',
            category: 'jackets',
            totalItems: 100,
        },
    ];
    return (
        <div className='container mx-auto px-20 relative my-10'>
            <div class='absolute transform -rotate-90 transition duration-300 left-12 top-1/2 -translate-x-1/2 '>
                <h2 className='uppercase text-2xl text-primary'>
                    Explore new and popular styles
                </h2>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-6'>
                    {popularProducts.slice(0, 1).map((product) => (
                        <div key={product.id} className='relative'>
                            <div>
                                <img
                                    className='h-full w-full object-cover'
                                    src={product.name}
                                    alt=''
                                    srcset=''
                                />
                            </div>
                            {product.ribonTitle && (
                                <Ribbon
                                    title={product.ribonTitle}
                                    backgroundColor={
                                        product.ribonTitle === 'sale'
                                            ? 'black'
                                            : 'primary'
                                    }
                                    textColor={'white'}
                                />
                            )}
                            <div className='w-full py-4 px-4 bg-black absolute bottom-0 left-0'>
                                <div className='flex justify-between items-center text-white'>
                                    <label className='text-base capitalize'>
                                        {product.category}
                                    </label>
                                    <label>
                                        {product.totalItems}
                                        <span> Products</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-span-6 grid grid-cols-2 gap-6'>
                    {popularProducts.slice(1, 10).map((product) => (
                        <div key={product.id} className='relative'>
                            <div>
                                <img
                                    className='h-full w-full object-cover'
                                    src={product.name}
                                    alt=''
                                    srcset=''
                                />
                            </div>
                            {product.ribonTitle && (
                                <Ribbon
                                    title={product.ribonTitle}
                                    backgroundColor={
                                        product.ribonTitle === 'sale'
                                            ? 'black'
                                            : 'primary'
                                    }
                                    textColor={'white'}
                                />
                            )}
                            <div className='w-full py-3 px-4 bg-black absolute bottom-0 left-0'>
                                <div className='flex justify-between items-center text-white'>
                                    <label className='text-base capitalize'>
                                        {product.category}
                                    </label>
                                    <label className='text-base capitalize'>
                                        {product.totalItems}
                                        <span> Products</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
