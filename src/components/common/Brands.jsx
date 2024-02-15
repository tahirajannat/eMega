import React from 'react';
import Brand1 from '../../assets/brand/brand-1.png';
import Brand2 from '../../assets/brand/brand-2.png';
import Brand3 from '../../assets/brand/brand-3.png';
import Brand4 from '../../assets/brand/brand-4.png';
import Brand5 from '../../assets/brand/brand-5.png';

export default function Brands() {
    const brands = [
        {
            id: 1,
            name: Brand1,
            link: '/',
        },
        {
            id: 2,
            name: Brand2,
            link: '/',
        },
        {
            id: 3,
            name: Brand3,
            link: '/',
        },
        {
            id: 4,
            name: Brand4,
            link: '/',
        },
        {
            id: 5,
            name: Brand5,
            link: '/',
        },
    ];
    return (
        <div className='container px-20 mx-auto my-10'>
            <div className='grid grid-cols-5 items-center justify-start gap-10 py-10'>
                {brands.map((brand) => (
                    <img
                        key={brand.id}
                        src={brand.name}
                        alt=''
                        srcset=''
                        className='object-fit w-40'
                    />
                ))}
            </div>
        </div>
    );
}
