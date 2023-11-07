import React, { useState } from 'react';
import { BsHeadset, BsSmartwatch } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import {
    HiMiniCamera,
    HiMiniComputerDesktop,
    HiMiniDevicePhoneMobile,
} from 'react-icons/hi2';

export default function HeaderBottom() {
    let Links = [
        {
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
        },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className=' bg-secondary w-full'>
            <div className='container mx-auto px-20 py-4'>
                <ul
                    className={`md:flex md:items-center justify-between md:pb-0 pb-12  transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='flex items-center text-gray-400 text-sm font-light md:my-0 my-7 md:border-r md:px-4 md:border-red-200'
                        >
                            <span className='mr-2'>{link.icon}</span>
                            <a
                                href={link.link}
                                className='text-gray-400 hover:text-gray-200 duration-500'
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
