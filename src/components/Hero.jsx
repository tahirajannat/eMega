<<<<<<< HEAD
import React, { useState } from 'react';

export default function Hero() {
    const list = [
        { id: 1, name: 'Item 1', list_id: true },
        { id: 2, name: 'Item 2', list_id: false },
        { id: 3, name: 'Item 3', list_id: true },
        // ... add more items as needed
    ];

    const [clickedItemId, setClickedItemId] = useState(null);

    const handleClick = (itemId) => {
        setClickedItemId(itemId);
    };

    return (
        <div>
            {list.map((item) => (
                <div
                    key={item.id}
                    className={
                        clickedItemId === item.id ? 'bg-red-400' : 'bg-white'
                    }
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </div>
            ))}
        </div>
=======
import React from 'react';
import HeroImg from '../assets/Iphone Image.png';
export default function Hero() {
    return (
        <section className='dark:bg-[#211C24] dark:text-gray-100'>
            <div className='container mx-auto grid grid-cols-12'>
                <div className='col-span-8 py-20 text-center flex items-center rounded-sm  lg:text-left'>
                    <div>
                        <h2 className='text-gray-500 text-xl'> Pro.Beyond.</h2>
                        <h1 className='text-[82px] font-extralight text-white'>
                            IPhone 14
                            <span className='font-bold font-poppins'>Pro</span>
                        </h1>
                        <p className='mt-1 mb-8 text-base font-thin  font-poppins'>
                            Created to change everything for the better. For
                            everyone
                        </p>
                        <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                            <a
                                rel='noopener noreferrer'
                                href='#'
                                className='px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100'
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 mt-20'>
                    <img
                        src={HeroImg}
                        alt=''
                        className='object-cover h-full  '
                    />
                </div>
            </div>
        </section>
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
    );
}
