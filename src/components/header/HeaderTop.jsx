import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

import Logo from '../../assets/cyberLogo.png';

export default function HeaderTop() {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Contact Us', link: '/' },
        { name: 'Blog', link: '/' },
        {
            name: <HiOutlineHeart className='text-2xl font-medium ' />,
            link: '/',
        },
        {
            name: (
                <HiOutlineShoppingCart className='text-2xl font-medium md:-ml-2' />
            ),
            link: '/',
        },
        {
            name: <FiUser className='text-[22px] font-medium md:-ml-2' />,
            link: '/',
        },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full '>
            <div className='container mx-auto px-20 md:flex  items-center bg-white py-4'>
                <div className='font-bold mr-16 cursor-pointer flex items-center font-[Poppins text-gray-800'>
                    <img src={Logo} alt='' srcset='' />
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className='flex flex-1 px-2'>
                    <div className='w-full '>
                        <label htmlFor='search' className='sr-only'>
                            Search
                        </label>
                        <div className='relative'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                <HiOutlineSearch
                                    className='h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                />
                            </div>
                            <input
                                id='search'
                                name='search'
                                className='block w-full rounded-md border-0 py-4 pl-10 pr-3 bg-gray-200 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
                                placeholder='Search'
                                type='search'
                            />
                        </div>
                    </div>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='md:ml-10 text-base font-medium md:my-0 my-7'
                        >
                            <a
                                href={link.link}
                                className='text-gray-800 hover:text-gray-400 duration-500'
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
