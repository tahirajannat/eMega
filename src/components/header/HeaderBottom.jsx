import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderBottom() {
    let Links = [
        {
            name: 'Jewelry & Accessories',
            link: '/',
            // icon: (
            //     <HiMiniDevicePhoneMobile className='text-base font-medium ' />
            // ),
        },
        {
            name: 'Clothing & Shoes',
            link: '/single',
        },
        {
            name: 'Home & Living',
            link: '/',
        },
        {
            name: 'Wedding & Party',
            link: '/',
        },
        {
            name: 'Toys & Entertainment',
            link: '/',
        },
        {
            name: 'Art & Collectibles',
            link: '/',
        },
        {
            name: 'Craft Supplies & Tools',
            link: '/',
        },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className=' bg-white w-full'>
            <div className='container mx-auto px-20 py-5'>
                <ul
                    className={`md:flex md:items-center justify-between md:pb-0 pb-12  transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='flex items-center text-black text-sm font-light '
                        >
                            <span className='mr-2'>{link.icon}</span>
                            <Link
                                to={link.link} // Use Link instead of a tag for routing
                                className='text-black hover:text-gray-900 duration-500'
                            >
                                {link.name}
                            </Link>
                            {/* <a
                                href={link.link}
                                className='text-black hover:text-gray-900 duration-500'
                            >
                                {link.name}
                            </a> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
