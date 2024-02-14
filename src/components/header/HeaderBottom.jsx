import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { BsHeadset, BsSmartwatch } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import {
    HiMiniCamera,
    HiMiniComputerDesktop,
    HiMiniDevicePhoneMobile,
} from 'react-icons/hi2';
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6

export default function HeaderBottom() {
    let Links = [
        {
<<<<<<< HEAD
            name: 'Jewelry & Accessories',
            link: '/',
            // icon: (
            //     <HiMiniDevicePhoneMobile className='text-base font-medium ' />
            // ),
        },
        {
            name: 'Clothing & Shoes',
            link: '/',
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
=======
            name: 'Phones',
            link: '/',
            icon: (
                <HiMiniDevicePhoneMobile className='text-base font-medium ' />
            ),
        },
        {
            name: 'Computers',
            link: '/',
            icon: <HiMiniComputerDesktop className='text-base font-medium ' />,
        },
        {
            name: 'Smart Watches',
            link: '/',
            icon: <BsSmartwatch className='text-base font-medium ' />,
        },
        {
            name: 'Cameras',
            link: '/',
            icon: <HiMiniCamera className='text-base font-medium ' />,
        },
        {
            name: 'Headphones',
            link: '/',
            icon: <BsHeadset className='text-base font-medium ' />,
        },
        {
            name: 'Gaming',
            link: '/',
            icon: <FaGamepad className='text-base font-medium ' />,
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
        },
    ];
    let [open, setOpen] = useState(false);
    return (
<<<<<<< HEAD
        <div className=' bg-white w-full'>
            <div className='container mx-auto px-20 py-5'>
=======
        <div className=' bg-secondary w-full'>
            <div className='container mx-auto px-20 py-4'>
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
                <ul
                    className={`md:flex md:items-center justify-between md:pb-0 pb-12  transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
<<<<<<< HEAD
                            className='flex items-center text-black text-sm font-light '
=======
                            className='flex items-center text-gray-400 text-sm font-light md:my-0 my-7 md:border-r md:px-4 md:border-red-200'
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
                        >
                            <span className='mr-2'>{link.icon}</span>
                            <a
                                href={link.link}
<<<<<<< HEAD
                                className='text-black hover:text-gray-900 duration-500'
=======
                                className='text-gray-400 hover:text-gray-200 duration-500'
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
