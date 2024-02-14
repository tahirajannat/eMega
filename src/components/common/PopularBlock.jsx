import React from 'react';
// import Popular4 from '../../assets/product/item-category-1.png';
// import Popular2 from '../../assets/product/item-category-2.png';
// import Popular3 from '../../assets/product/item-category-3.png';
// import Popular1 from '../../assets/product/item-category.png';
import Popular1 from '../../assets/image-category-1.png';
import Popular2 from '../../assets/item-category-2.png';
import Popular3 from '../../assets/item-category-3.png';
import Popular4 from '../../assets/item-category.png';

export default function PopularBlock() {
    const popularProducts = [
        {
            id: 1,
            name: Popular1,
            link: '/',
            category: '',
            totalItems: 10,
        },
        {
            id: 2,
            name: Popular2,
            link: '/',
            category: '',
            totalItems: 10,
        },
        {
            id: 3,
            name: Popular3,
            link: '/',
            category: '',
            totalItems: 10,
        },
        {
            id: 4,
            name: Popular4,
            link: '/',
            category: '',
            totalItems: 10,
        },
        {
            id: 5,
            name: Popular3,
            link: '/',
            category: '',
            totalItems: 10,
        },
    ];
    return (
        <div className='container mx-auto px-20'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    {popularProducts.slice(0, 1).map((product) => (
                        <div key={product.id}>
                            <img src={product.name} alt='' srcset='' />
                        </div>
                    ))}
                </div>
                <div className='col-span-6 grid grid-cols-2 gap-4'>
                    {popularProducts.slice(1, 10).map((product) => (
                        <div key={product.id}>
                            <img src={product.name} alt='' srcset='' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
